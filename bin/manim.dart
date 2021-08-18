import 'package:args/command_runner.dart';

import 'commands/build.dart';
import 'commands/dev.dart';
import 'commands/init.dart';
import 'helpers/console.dart';

void main(List<String> arguments) {
  CommandRunner('manim', 'Manim Animation Engine for the web')
    ..addCommand(BuildProcess())
    ..addCommand(DevProcess())
    ..addCommand(InitCommand())
    ..run(arguments).catchError((error) {
      printPartial('Error: ');
      print(error);
    });
}
