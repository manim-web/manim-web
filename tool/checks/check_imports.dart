// Check that manim.dart isn't imported from anywhere in lib
// And that dart:html isn't imported from anywhere except in canvas_2d_renderer

import 'dart:async';
import 'dart:io';

import '../utils/get_all_files.dart';
import '../utils/get_lib_dir.dart';
import '../utils/printing.dart';

// There may be a way to use dart:mirrors instead of just reading the files.

Future<bool> checkImports() async {
  printHeader('IMPORTS');

  var libFolder = await getLibDirectory();

  // list all files recursively
  var files = await getAllFiles(directory: libFolder);

  var ok = true;

  for (var file in files) {
    var content = await file.readAsLines();
    var importLines = content.where((line) => line.startsWith('import'));

    ok = _checkManimImport(ok, file, importLines);
    ok = _checkHTMLImport(ok, file, importLines);
  }

  if (ok) {
    printBordered('No problems with the imports',
        firstCharacter: '*', error: false);
  }

  printBorderEnd();

  return ok;
}

bool _checkManimImport(bool ok, File file, Iterable<String> importLines) {
  for (var line in importLines) {
    if (line.contains('manim.dart')) {
      var path = rootRelativePath(file.path);
      printBordered(
          'In $path, `manim.dart` is imported, please remove this import. ',
          error: true);
      ok = false;
    }
  }

  return ok;
}

bool _checkHTMLImport(bool ok, File file, Iterable<String> importLines) {
  var allowedFiles = [
    'abstract_html_display.dart',
    'canvas_2d_renderer.dart',
    'canvas_2d_display.dart',
  ];
  var isAllowed =
      (String path) => allowedFiles.any((file) => path.contains(file));

  for (var line in importLines) {
    var path = rootRelativePath(file.path);
    if (line.contains('dart:html') && !isAllowed(path)) {
      printBordered(
          'In $path, `dart:html` is imported, please remove this import. ',
          error: true);
      ok = false;
    }
  }

  return ok;
}

String rootRelativePath(String absolutePath) {
  var libIndex = absolutePath.lastIndexOf('lib');
  return absolutePath.substring(libIndex);
}

void main() async {
  var ok = await checkImports();

  var exitCode = ok ? 0 : 1;
  exit(exitCode);
}
