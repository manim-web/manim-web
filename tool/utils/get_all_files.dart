import 'dart:io';

Future<Iterable<File>> getAllFiles({required Directory directory}) async {
  var lister = directory.list(recursive: true);
  var entities = await lister.toList();

  return entities.whereType<File>();
}
