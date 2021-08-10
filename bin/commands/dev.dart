import 'dart:io';

import 'package:args/args.dart';
import 'package:process_run/shell.dart';

import '../helpers/build_process.dart';
import '../helpers/console.dart';
import '../helpers/display.dart';
import '../helpers/files.dart';

class DevProcess extends AbstractBuildProcess {
  DevProcess(ArgResults args) : super(args);

  Future? webdev;

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

    watchFile(file).listen((e) => listener());

    listener();

    if (display.isWeb) {
      var port = args.getNullableOption('port') ?? '8080';
      if (int.tryParse(port) == null) {
        port = '8080';
        print('The port must be a number, not $port');
      }
      webdev = Shell(verbose: false).run('webdev serve web:$port');
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

    if (needRebuild) {
      await rebuild();
    }
  }

  static ArgParser parser = ArgParser()
    ..addOption('file', abbr: 'f')
    ..addOption('port', abbr: 'p')
    ..addDisplayOptions();
}
