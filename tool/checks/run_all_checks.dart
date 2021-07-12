import 'dart:io';

import 'check_copy_mobject.dart';
import 'check_imports.dart';
import '../utils/printing.dart';

void main() async {
  var importsCheck = await checkImports();
  var copyMobjectCheck = checkCopyMobject();
  var checks = [importsCheck, copyMobjectCheck];

  if (checks.every((check) => check == true)) {
    var text = 'All checks passed successfully'.colored().lightGreen();
    print('\n\n$text');

    exit(0);
  } else {
    var count = checks.where((check) => check == false).length;
    var s = count > 1 ? 's' : '';
    var text = '$count check$s failed'.colored().lightRed();
    print('\n\n$text');

    exit(1);
  }
}
