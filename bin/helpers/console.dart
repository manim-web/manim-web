import 'dart:convert';
import 'dart:io';

import 'package:args/args.dart';

// print without a new line
void printPartial(Object o) {
  stdout.write(o);
}

void clear() {
  print('\x1B[2J\x1B[0;0H');
}

void printNumbered(List<Object> l) {
  print([
    for (var i = 0; i < l.length; i++) '${i + 1}: ${l[i]}',
  ].join('\n'));
}

void clearLastLine() {
  const ESC = '\x1b';
  const CSI = ESC + '[';

  stdout.write(CSI + 'A');
  stdout.write(CSI + 'K');
}

Stream<String> readLine() =>
    stdin.transform(utf8.decoder).transform(const LineSplitter());

extension BetterArgResults on ArgResults {
  String? getNullableOption(String opt) {
    try {
      return getOption(opt);
    } on Error {
      return null;
    }
  }

  String getOption(String opt) => this[opt] as String;

  bool getFlag(String opt) => this[opt] as bool;
}
