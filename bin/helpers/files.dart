import 'dart:async';
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

extension BetterFile on File {
  Stream<void> watchFile() {
    return parent
        .watch()
        .where((event) => absolute(event.path) == absolute(path))
        .map((event) => null);
  }
}

extension BetterDir on Directory {
  Future<List<FileSystemEntity>> content({bool recursive = false}) {
    var files = <FileSystemEntity>[];
    var completer = Completer<List<FileSystemEntity>>();
    var lister = list(recursive: recursive);

    lister.listen(
      (file) => files.add(file),
      onDone: () => completer.complete(files),
      onError: (error) => completer.completeError(error),
    );

    return completer.future;
  }
}
