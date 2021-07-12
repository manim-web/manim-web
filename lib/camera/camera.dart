import 'package:manim_web/display/abstract_display.dart';
import 'package:manim_web/mobject/text_mobject.dart';

import 'package:manim_web/constants.dart';
import 'package:manim_web/mobject/types/mobject.dart';
import 'package:manim_web/mobject/types/vectorized_mobject.dart';
import 'package:manim_web/util/array.dart';
import 'package:manim_web/util/color.dart';
import 'package:manim_web/util/vector.dart';

class Camera {
  int pixelHeight = DEFAULT_PIXEL_HEIGHT;
  int pixelWidth = DEFAULT_PIXEL_WIDTH;
  double frameWidth = FRAME_WIDTH;
  double frameHeight = FRAME_HEIGHT;
  Vector3 frameCenter = ORIGIN;
  Color backgroundColor;
  AbstractDisplay display;

  Camera({
    required this.display,
    this.backgroundColor = BLACK,
  }) {
    display.bindCamera(this);
    display.setup();
    resizeFrameShape();
    display.renderer.renderBackground(backgroundColor);
  }

  void resetPixelShape(int newWidth, int newHeight) {
    pixelWidth = newWidth;
    pixelHeight = newHeight;
    display.renderer.renderBackground(backgroundColor);
    display.setDisplaySize(pixelWidth, pixelHeight);
    resizeFrameShape();
  }

  int getPixelHeight() => pixelHeight;
  int getPixelWidth() => pixelWidth;
  double getFrameHeight() => frameHeight;
  double getFrameWidth() => frameWidth;
  Vector3 getFrameCenter() => frameCenter;

  void resizeFrameShape({int fixedDimension = 0}) {
    var aspectRatio = pixelWidth / pixelHeight;

    if (fixedDimension == 0) {
      frameHeight = frameWidth / aspectRatio;
    } else {
      frameWidth = aspectRatio * frameHeight;
    }

    refreshMatrix();
  }

  void reset() {
    display.renderer.renderBackground(backgroundColor);
  }

  List<Mobject> extractMobjectFamilyMembers(List<Mobject> mobjects,
      {bool onlyThoseWithPoints = false}) {
    var method = onlyThoseWithPoints
        ? (Mobject m) => m.getFamilyWithPoints()
        : (Mobject m) => m.getFamily();

    return withoutRedundancies([
      for (var mob in mobjects) ...method(mob),
    ]);
  }

  bool isInFrame(Mobject mob) {
    var checks = [
      mob.getRight().x < frameCenter.x - frameWidth,
      mob.getBottom().y > frameCenter.y + frameHeight,
      mob.getLeft().x > frameCenter.x + frameWidth,
      mob.getTop().y < frameCenter.y - frameHeight,
    ];

    return !checks.reduce((a, b) => a || b);
  }

  void render(List<Mobject> mobjects) {
    for (var mobject in extractMobjectFamilyMembers(mobjects).reversed) {
      // TODO remove Text when Text Vmobject properly implemented
      // TODO add PMobject, AbstractImageMobject
      if (mobject is VMobject) {
        display.renderer.renderVMobject(mobject);
      } else if (mobject is Text) {
        display.renderer.renderText(mobject);
      } else {
        display.renderer.renderMobject(mobject);
      }
    }
  }

  void refreshMatrix() {
    display.renderer.setMatrix(
      pixelWidth / frameWidth,
      0,
      0,
      -pixelHeight / frameHeight,
      (pixelWidth / 2) - frameCenter.x * pixelWidth / frameWidth,
      (pixelHeight / 2) - frameCenter.y * pixelHeight / frameHeight,
    );
  }

  List<Vector3> transformPointsPreDisplay(Mobject mob, List<Vector3> points) {
    if (!points
        .every((pt) => pt.x.isFinite && pt.y.isFinite && pt.z.isFinite)) {
      points = [ORIGIN];
    }

    return points;
  }
}
