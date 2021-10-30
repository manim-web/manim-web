import 'dart:io';

import 'package:process_run/shell.dart';

import '../helpers/build_process.dart';
import '../helpers/console.dart';
import '../helpers/display.dart';

class RenderProcess extends AbstractBuildProcess {
  @override
  bool get renderMode => true;

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

    if (getFlag('webdev')) {
      await compile();
    }
  }

  Future compile() async {
    var shell = Shell(workingDirectory: Directory.current.path);
    await shell.run('webdev build -o web:build');
  }

  @override
  void addOptions() {
    argParser
      ..addOption(
        'file',
        abbr: 'f',
        help: 'Dart file containing the scene',
      )
      ..addFlag(
        'webdev',
        defaultsTo: true,
        help: 'Use webdev to build',
      )
      ..addDisplayOptions();
  }

  @override
  String description = 'Build a Manim Web project in render mode';

  @override
  String name = 'render';
}
