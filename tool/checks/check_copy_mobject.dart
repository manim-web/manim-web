// Check that every mobject has a copy function with the correct type

import 'dart:io';
import 'dart:mirrors';

import 'package:manim_web/manim.dart';

import '../utils/printing.dart';

List<ClassMirror> findSubClasses(Type type) {
  var classMirror = reflectClass(type);

  return currentMirrorSystem()
      .libraries
      .values
      .expand((lib) => lib.declarations.values)
      .where((lib) =>
          lib is ClassMirror &&
          lib.isSubclassOf(classMirror) &&
          lib != classMirror)
      .cast<ClassMirror>()
      .toList();
}

bool checkCopyMobject() {
  printHeader('MOBJECT COPY METHOD');

  var ok = true;

  var mobjectClasses = findSubClasses(Mobject);

  for (var classMirror in mobjectClasses) {
    var hasCopyDeclared = classMirror.declarations.containsKey(Symbol('copy'));

    // classMirror.simpleName.toString() returns something like `Symbol("{className}")`
    var symbol = classMirror.simpleName.toString();
    var className = symbol.substring(8, symbol.length - 2);

    var loc = classMirror.location!;
    var file = loc.sourceUri.path.replaceFirst('manim_web/', 'lib/');

    if (!hasCopyDeclared && !classMirror.isAbstract) {
      printBordered(
          'In $file:${loc.line}, the method `$className.copy` wasn\'t declared',
          error: true);
      ok = false;
    }
  }

  if (ok) {
    printBordered('No problem with the mobject `copy` method', error: false);
  }

  printBorderEnd();

  return ok;
}

void main() async {
  var ok = checkCopyMobject();

  var exitCode = ok ? 0 : 1;
  exit(exitCode);
}
