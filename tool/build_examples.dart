import 'dart:io';

import 'package:manim_web/manim.dart';
import 'package:path/path.dart';
import 'package:process_run/shell.dart';

import 'utils/directories.dart';
import 'utils/get_lib_dir.dart';

void main() async {
  var lib = await getLibDirectory();
  var mainDir = lib.parent;

  var examples = await getHTMLExamples(mainDir);
  var shell = Shell(workingDirectory: mainDir.path);

  // await shell.run([
  //   for (var d in examples)
  //     'dart bin/manim.dart build -f ${d.item1.path} -h ${d.item2.path} --no-webdev'
  // ].join('\n'));

  await shell.run('webdev build -o web:build');
}

Future<List<Tuple2<File, File>>> getHTMLExamples(Directory mainDir) async {
  var exampleDir = Directory(mainDir.path + separator + 'example');
  var content = await dirContents(exampleDir);
  var dartFiles = content
      .whereType<File>()
      .where((element) => extension(element.path) == '.dart')
      .toList();

  return [
    for (var file in dartFiles)
      // temporary storage
      for (var htmlFile in [await getHTMLFile(file)])
        if (htmlFile != null) Tuple2(file, htmlFile)
  ];
}

Future<File?> getHTMLFile(File dartFile) async {
  var dartBasePath =
      dartFile.path.substring(0, dartFile.path.lastIndexOf('.dart'));
  var htmlPath = dartBasePath + '.html';
  var htmlFile = File(htmlPath);
  if (await htmlFile.exists()) {
    return htmlFile;
  } else {
    return null;
  }
}
