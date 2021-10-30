@JS()
library js_util;

import 'dart:html';
import 'dart:html_common';
import 'dart:js';

import 'package:js/js.dart';
import 'package:manim_web/src/util/math_functions.dart';

@JS('JSZip')
class JSZip {
  external void file(String fileName, String data, Object object);
  external Future generateAsync(Object object);
}

@JS()
@anonymous
class _FileOptions {
  external bool get base64;
  external set base64(bool v);

  external factory _FileOptions({required base64});
}

@JS()
@anonymous
class _GenerateOptions {
  external String get type;
  external set type(String v);

  external factory _GenerateOptions({required type});
}

class ZipFile {
  JSZip zip;

  ZipFile() : zip = JSZip();

  void addFrame(int frameNumber, int frameTotalCount, String base64Data) {
    var digitCount = log10(frameTotalCount).ceil();
    var zerosCount = digitCount - frameNumber.toString().length;
    var zeros = List.filled(zerosCount, '0').join('');
    var fileName = 'frame$zeros$frameNumber.png';

    zip.file(fileName, base64Data, _FileOptions(base64: true));
  }

  Future generate() async {
    var _promise = zip.generateAsync(_GenerateOptions(type: 'blob'));
    var data = await promiseToFuture<Blob>(_promise);
    save(data, 'animation.zip');
  }
}

@JS('console.log')
external void consoleLog(Object o);

@JS('saveAs')
external void save(Blob b, [String? fileName]);
