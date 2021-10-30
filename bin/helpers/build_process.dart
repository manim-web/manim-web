import 'dart:convert';
import 'dart:io';

import 'package:path/path.dart';
import 'package:process_run/shell.dart';

import 'command.dart';
import 'console.dart';
import 'display.dart';
import 'files.dart';
import 'tex.dart';

abstract class AbstractBuildProcess extends Command {
  late File file;
  late Shell shell;
  late File tempFile;
  late Directory tempDir;
  late File finalFile;
  late Directory finalDir;
  late String scene;
  late String fileContent;
  late Display display;

  bool get renderMode => false;

  Future prepare() async {
    var fileName = getNullableOption('file');
    if (fileName == null) {
      throw 'Please add a file';
    }

    file = File(fileName);

    tempDir = await Directory(
      Directory.current.path + separator + 'temp',
    ).create();

    tempFile = await File(
      tempDir.path + separator + basename(file.path),
    ).create();

    finalDir = await Directory(
      Directory.current.path + separator + 'web',
    ).create();

    finalFile = await File(
      finalDir.path + separator + basename(file.path),
    ).create();

    shell = Shell(workingDirectory: tempDir.path, verbose: false);

    display = getDisplay();

    fileContent = await file.readAsString();
  }

  Future<List<TexToLoad>> getTexToLoad() async {
    var tempFileContent = '''
      import 'dart:convert';
      
      $fileContent

      void main(){
        var display = EmptyDisplay();
        var scene = $scene()..bindDisplay(display);

        var l = <List<String>>[];

        SingleStringMathTex.preloadCallBack = (env, tex) => l.add([env, tex]);

        scene.preload();

        print(jsonEncode(l));

        print('OK');
      }
    ''';

    await tempFile.writeAsString(tempFileContent);

    var res = await shell.run('dart run ${tempFile.path}').then((r) => r[0]);
    var output = res.stdout.toString().trim();

    if (!output.endsWith('OK')) {
      throw SceneException(res.stderr);
    }

    output = output.substring(0, output.lastIndexOf('OK'));

    var rawData = (jsonDecode(output) as List<dynamic>).cast<List<dynamic>>();

    var data = [for (var elem in rawData) elem.cast<String>()];

    var texToLoad = {
      for (var tex in data)
        TexToLoad(
          environment: tex[0],
          texString: tex[1],
        )
    };

    return texToLoad.toList();
  }

  Future preloadTex() async {
    var texToLoad = await getTexToLoad();

    printPartial('Preloading LaTeX Strings...');
    var svgs = [
      for (var tex in texToLoad)
        await getTexSVG(
          shell: shell,
          directory: tempDir,
          tex: tex,
        )
    ];
    print('done');

    var environments = {for (var tex in texToLoad) tex.environment};

    var addTexEnvironments = [
      for (var environment in environments)
        'SingleStringMathTex.texToSVGMap[r\'\'\'$environment\'\'\'] = {};'
    ].join('\n');

    var addSVGs = '\n\n';

    for (var i = 0; i < svgs.length; i++) {
      var tex = texToLoad[i];
      var environment = tex.environment;
      var texString = tex.texString;
      var svg = svgs[i];

      addSVGs += 'SingleStringMathTex.texToSVGMap'
          '[r\'\'\'$environment\'\'\']!'
          '[r\'\'\'$texString\'\'\'] = r\'\'\'$svg\'\'\';\n';
    }

    return addTexEnvironments + addSVGs;
  }

  Future<String> getScene() async {
    var scenes = await getScenes();

    if (scenes.isEmpty) {
      throw 'No scenes in this file';
    }

    if (scenes.length == 1) {
      scene = scenes.first;
      return scene;
    }

    scene = showSceneSelection(scenes);

    return scene;
  }

  void checkMainDeclared() {
    if (hasMainDeclared(fileContent)) {
      throw 'Please remove the main function from the file';
    }
  }

  String showSceneSelection(List<String> scenes) {
    int? selection = -1;

    while (selection == null || selection > scenes.length || selection <= 0) {
      printNumbered(scenes);

      var input = stdin.readLineSync();

      if (input == null) {
        continue;
      }

      selection = int.tryParse(input);
    }

    return scenes[selection - 1];
  }

  Future<List<String>> getScenes() async {
    var tempFileContent = '''
      import 'dart:convert';
      import 'dart:mirrors';
      
      $fileContent

      List<ClassMirror> findSubClasses(Type type) {
        var classMirror = reflectClass(type);

        return currentMirrorSystem()
            .libraries
            .values
            .expand((lib) => lib.declarations.values)
            .where((lib) =>
                lib is ClassMirror &&
                lib.isSubclassOf(classMirror) &&
                lib != classMirror)
            .cast<ClassMirror>()
            .toList();
      }

      void main(){
        var scenes = [
          for(var mirror in findSubClasses(Scene))
            MirrorSystem.getName(mirror.simpleName)
        ];

        print(jsonEncode(scenes));

        print('OK');
      }
    ''';

    await tempFile.writeAsString(tempFileContent);

    var res = await shell.run('dart run ${tempFile.path}').then((r) => r[0]);
    var output = res.stdout.toString().trim();

    if (!output.endsWith('OK')) {
      throw SceneException(res.stderr);
    }

    output = output.substring(0, output.lastIndexOf('OK'));

    var scenes = (jsonDecode(output) as List<dynamic>).cast<String>();
    return scenes;
  }

  Display getDisplay() {
    return Display.fromArgs(argResults!, renderMode);
  }

  Future injectData({
    String tex = '',
  }) async {
    var finalCode = '''
      ${display.imports}
      $fileContent

      void main(){
        $tex

        var display = ${display.creationCode};
        var scene = $scene()..bindDisplay(display);

        scene.run();
      }
    ''';

    await finalFile.writeAsString(finalCode);

    if (display.isWeb) {
      var htmlFile = getOption('html');
      var finalHTMLFile = File(finalDir.path + separator + basename(htmlFile));
      await finalHTMLFile.create();
      await finalHTMLFile.writeAsString(await File(htmlFile).readAsString());
    }
  }
}

class SceneException implements Exception {
  String data;

  SceneException(this.data);

  @override
  String toString() {
    return 'An error happened while running the scene\n$data';
  }
}
