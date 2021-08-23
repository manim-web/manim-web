import 'dart:io';

import 'package:path/path.dart';
import 'package:process_run/shell.dart';

import '../helpers/build_process.dart';
import '../helpers/console.dart';
import '../helpers/display.dart';
import '../helpers/files.dart';

class DevProcess extends AbstractBuildProcess {
  Future? webdev;
  int? port;

  @override
  Future run() async {
    await prepare();

    await getScene();

    readLine().listen((event) {
      event = event.toLowerCase();
      if (event == 'r' || event == 'reload') {
        listener();
      } else if (event == 'q' || event == 'quit') {
        exit(0);
      }
    });

    file.watchFile().listen((e) => listener());

    listener();

    if (display.isWeb && getFlag('webdev')) {
      var port = getOption('port');
      if (int.tryParse(port) == null) {
        port = '8080';
        print('The port must be a number, not "$port"');
      }
      webdev = Shell(verbose: false).run('webdev serve web:$port');
      this.port = int.parse(port);
    }
  }

  bool needRebuild = false;
  bool alreadyRebuilding = false;

  void listener() async {
    if (alreadyRebuilding && !needRebuild) {
      needRebuild = true;
      return;
    }

    if (!alreadyRebuilding) {
      await rebuild();
      alreadyRebuilding = false;
    }
  }

  Future rebuild() async {
    fileContent = await file.readAsString();

    clear();
    print('Building scene $scene');
    print(
      'If the scene name or the file name has changed, '
      'you will have to restart the server',
    );

    var injectTex = await preloadTex();

    await injectData(
      tex: injectTex,
    );

    if (display.isWeb) {
      var htmlFilePath = basename(File(getOption('html')).path);
      print('Animation running on http://localhost:$port/$htmlFilePath');
    }

    if (needRebuild) {
      await rebuild();
    }
  }

  @override
  void addOptions() {
    argParser
      ..addOption(
        'file',
        abbr: 'f',
        help: 'Dart file containing the scene',
      )
      ..addOption(
        'port',
        abbr: 'p',
        help: 'port used by the server',
        defaultsTo: '8080',
      )
      ..addFlag(
        'webdev',
        defaultsTo: true,
        help: 'Use webdev to build. If set to false, the server will not start',
      )
      ..addDisplayOptions();
  }

  @override
  String description = 'Start the Dev Server for a Manim Web project';

  @override
  String name = 'dev';
}
