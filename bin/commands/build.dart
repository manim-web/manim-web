import 'dart:io';

import 'package:args/args.dart';
import 'package:process_run/shell.dart';

import '../helpers/build_process.dart';
import '../helpers/console.dart';
import '../helpers/display.dart';

class BuildProcess extends AbstractBuildProcess {
  BuildProcess(ArgResults args) : super(args);

  @override
  Future run() async {
    await prepare();

    var scene = await getScene();

    clear();
    print('Building scene $scene');

    var injectTex = await preloadTex();

    await injectData(
      tex: injectTex,
    );

    if (!args.getFlag('no-webdev')) {
      await compile();
    }
  }

  Future compile() async {
    var shell = Shell(workingDirectory: Directory.current.path);
    await shell.run('webdev build -o web:build');
  }

  static ArgParser parser = ArgParser()
    ..addOption('file', abbr: 'f')
    ..addFlag('no-webdev')
    ..addDisplayOptions();
}
