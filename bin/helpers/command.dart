import 'dart:async';

import 'package:args/command_runner.dart' as cmd;

abstract class Command extends cmd.Command {
  Command() {
    addOptions();
  }

  @override
  FutureOr<void> run();

  void addOptions();

  String? getNullableOption(String opt) {
    try {
      return getOption(opt);
    } on Error {
      return null;
    }
  }

  String getOption(String opt) => argResults![opt] as String;

  bool getFlag(String opt) => argResults![opt] as bool;
}
