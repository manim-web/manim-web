import 'dart:io';

import 'package:path/path.dart';
import 'package:process_run/shell.dart';

class TexToLoad {
  String texString;
  String environment;

  TexToLoad({
    required this.texString,
    required this.environment,
  });

  String get texExpression =>
      '\\begin{$environment}' '$texString' '\\end{$environment}';

  String get texDocument =>
      baseDocument.replaceAll('[tex_expression]', texExpression);

  static String baseDocument = r'''
    \documentclass[preview]{standalone}

    \usepackage[english]{babel}
    \usepackage[utf8]{inputenc}
    \usepackage[T1]{fontenc}
    \usepackage{lmodern}
    \usepackage{amsmath}
    \usepackage{amssymb}
    \usepackage{dsfont}
    \usepackage{setspace}
    \usepackage{tipa}
    \usepackage{relsize}
    \usepackage{textcomp}
    \usepackage{mathrsfs}
    \usepackage{calligra}
    \usepackage{wasysym}
    \usepackage{ragged2e}
    \usepackage{physics}
    \usepackage{xcolor}
    \usepackage{microtype}
    \DisableLigatures{encoding = *, family = * }
    \linespread{1}

    \begin{document}

    [tex_expression]

    \end{document}
  ''';

  @override
  int get hashCode => texString.hashCode + environment.hashCode;

  @override
  bool operator ==(Object tex) => tex.hashCode == hashCode;
}

Future<String> getTexSVG({
  required Shell shell,
  required Directory directory,
  required TexToLoad tex,
}) async {
  var hash = tex.hashCode.toRadixString(16);

  var texFile = File(directory.path + separator + hash + '.tex');
  var _svgFile = File(directory.path + separator + hash + '.svg');

  if (await _svgFile.exists()) {
    return _svgFile.readAsString();
  }

  await texFile.create();
  await texFile.writeAsString(tex.texDocument);

  var dviFile = await _texToDVI(shell, texFile);
  var svgFile = await _dviToSVG(shell, dviFile);

  var svg = await svgFile.readAsString();

  return svg;
}

Future<File> _texToDVI(Shell shell, File file) async {
  var command = [
    'latex',
    // '-interaction=batchmode',
    '-halt-on-error',
    '-output-format="dvi"',
    '-output-directory="${file.parent.path}"',
    '"${file.path}"',
  ].join(' ');

  var process = await shell.run(command);

  if (process[0].exitCode != 0) {
    print('Error with tex file ${basename(file.path)} (${process[0].exitCode}');
  }

  return File(file.parent.path +
      separator +
      basenameWithoutExtension(file.path) +
      '.dvi');
}

Future<File> _dviToSVG(Shell shell, File file) async {
  var result = file.parent.path +
      separator +
      basenameWithoutExtension(file.path) +
      '.svg';
  var command = [
    'dvisvgm',
    '"${file.path}"',
    '-n',
    '-v 0',
    '-o "$result"',
  ].join(' ');

  await shell.run(command);

  return File(result);
}
