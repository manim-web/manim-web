import 'dart:html';

import 'package:manim_web/src/display/canvas_2d_display.dart';
import 'package:manim_web/src/util/js_util.dart';

class RecordedCanvas2DDisplay extends Canvas2DDisplay {
  ZipFile zipFile = ZipFile();
  int frameCount = 0;

  RecordedCanvas2DDisplay(Element container) : super(container);

  @override
  Future<double> nextFrame() async {
    frameCount++;
    recordFrame();

    return 1 / camera.frameRate;
  }

  void recordFrame() {
    var data = canvas.toDataUrl().split(';base64,')[1];

    zipFile.addFrame(frameCount, 100000, data);
  }

  @override
  Future tearDown() async {
    await zipFile.generate();
  }

  @override
  void bindEventListeners() {}

  @override
  void unbindEventListeners() {}
}
