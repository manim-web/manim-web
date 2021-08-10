import 'package:args/args.dart';

import 'commands/build.dart';
import 'commands/dev.dart';
import 'helpers/help.dart';

void main(List<String> arguments) async {
  var parser = ArgParser()
    ..addCommand('build', BuildProcess.parser)
    ..addCommand('dev', DevProcess.parser);
  var args = parser.parse(arguments);

  switch (args.command?.name) {
    case 'build':
      return BuildProcess(args).run();

    case 'dev':
      return DevProcess(args).run();

    case null:
      return printHelp();

    default:
      print('Unknown command ${args.command?.name}');
      return printHelp();
  }
}
