import 'dart:io';

import 'package:process_run/shell.dart';

import '../helpers/command.dart';
import '../helpers/console.dart';
import '../helpers/files.dart';

class InitCommand extends Command {
  @override
  String description = 'Create a new Manim Web project';

  @override
  String name = 'init';

  @override
  Future run() async {
    var webdev = await isWebDevActivated();

    if (!webdev) {
      await activateWebDev();
    }

    await cloneTemplate();
    await getDependencies();

    clear();
    print('Project successfully created in ${directory.path}');
  }

  Shell shell;
  late Directory directory;
  late Shell projectShell;

  InitCommand()
      : shell = Shell(
          workingDirectory: Directory.current.path,
          verbose: true,
        );

  @override
  void addOptions() {
    argParser
      ..addOption(
        'template',
        abbr: 't',
        help: 'Template for the project',
        defaultsTo: 'https://github.com/manim-web/project-template.git',
      )
      ..addOption(
        'directory',
        abbr: 'd',
        aliases: ['dir'],
        help: 'Directory for the project',
      );
  }

  Future<bool> isWebDevActivated() async {
    var shell = Shell(
      workingDirectory: Directory.current.path,
      verbose: false,
    );
    try {
      await shell.run('webdev');
      return true;
    } on ShellEnvironment {
      return false;
    }
  }

  Future activateWebDev() async {
    print('Activating webdev...');
    await shell.run('dart pub global activate webdev');
    print('Webdev activated');
  }

  Future cloneTemplate() async {
    print('Clonning the repository...');

    var repo = getOption('template');
    var dir = getNullableOption('directory');

    if (dir == null) {
      throw 'Please add the target directory';
    }

    directory = Directory(dir);

    if (await directory.exists()) {
      var dirContent = await directory.content();
      if (dirContent.isNotEmpty) {
        throw 'The directory isn\'t empty';
      }
    }

    await shell.run('git clone $repo $dir');

    print('Repository cloned');

    projectShell = shell.cd(directory.path);
  }

  Future getDependencies() async {
    await projectShell.run('pub get');
    // get newest manim_web version
    await projectShell.run('pub upgrade manim_web');
  }
}
