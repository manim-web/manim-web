import 'dart:io';

import 'package:path/path.dart';

Future<Directory> getLibDirectory() async {
  // path to the main script (tool/{folder}/{file}.dart)
  var pathToFile = File(Platform.script.toFilePath());

  // path to main folder (manim-web)
  var mainDirectory = pathToFile.parent;

  while (basename(mainDirectory.path) != 'tool') {
    mainDirectory = mainDirectory.parent;
  }

  mainDirectory = mainDirectory.parent;

  if (!await mainDirectory.exists()) {
    throw 'There is an error somewhere, maybe some files have moved or some directory renamed';
  }

  // get lib folder
  var libFolder = Directory('${mainDirectory.path}${separator}lib');

  return libFolder;
}
