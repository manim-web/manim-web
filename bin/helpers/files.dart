import 'dart:io';

import 'package:path/path.dart';

bool hasMainDeclared(String fileContent) {
  var mainFuncRegex = RegExp(
    r'^\s*(\w*\s*|\s+)main\s*\(.*?\)\s*(\{\s*$|=>)',
    dotAll: true,
    multiLine: true,
  );
  return mainFuncRegex.hasMatch(fileContent);
}

Stream watchFile(File file) {
  var parent = file.parent;

  return parent
      .watch()
      .where((event) => absolute(event.path) == absolute(file.path))
      .map((event) => null);
}
