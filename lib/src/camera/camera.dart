import 'package:manim_web/src/constants.dart';
import 'package:manim_web/src/display/abstract_display.dart';
import 'package:manim_web/src/mobject/types/mobject.dart';
import 'package:manim_web/src/mobject/types/vectorized_mobject.dart';
import 'package:manim_web/src/util/aabb.dart';
import 'package:manim_web/src/util/array.dart';
import 'package:manim_web/src/util/color.dart';
import 'package:manim_web/src/util/vector.dart';

class Camera {
  int pixelHeight = DEFAULT_PIXEL_HEIGHT;
  int pixelWidth = DEFAULT_PIXEL_WIDTH;
  double frameWidth = FRAME_WIDTH;
  double frameHeight = FRAME_HEIGHT;
  Vector3 frameCenter = ORIGIN;

  double frameRate = DEFAULT_FRAME_RATE;

  Color backgroundColor;
  late AbstractDisplay display;

  Camera({
    this.backgroundColor = BLACK,
  });

  void bindDisplay(AbstractDisplay _display) {
    display = _display;
    display.bindCamera(this);
    display.setup();
    resizeFrameShape();
    var aabb = getFullScreenAABB();
    display.renderer.renderBackground(backgroundColor, aabb);
  }

  void resetPixelShape(int newWidth, int newHeight) {
    pixelWidth = newWidth;
    pixelHeight = newHeight;
    var aabb = getFullScreenAABB();
    display.renderer.renderBackground(backgroundColor, aabb);
    display.setDisplaySize(pixelWidth, pixelHeight);
    resizeFrameShape();
  }

  int getPixelHeight() => pixelHeight;
  int getPixelWidth() => pixelWidth;
  double getFrameHeight() => frameHeight;
  double getFrameWidth() => frameWidth;
  Vector3 getFrameCenter() => frameCenter;

  AABB getFullScreenAABB() => AABB(
        pt1: frameCenter - (UP * FRAME_HEIGHT + LEFT * FRAME_WIDTH) / 2,
        pt2: frameCenter + (UP * FRAME_HEIGHT + LEFT * FRAME_WIDTH) / 2,
      );

  void resizeFrameShape({int fixedDimension = 0}) {
    var aspectRatio = pixelWidth / pixelHeight;

    if (fixedDimension == 0) {
      frameHeight = frameWidth / aspectRatio;
    } else {
      frameWidth = aspectRatio * frameHeight;
    }

    refreshMatrix();
  }

  void reset(AABB aabb) {
    display.renderer.renderBackground(backgroundColor, aabb);
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

  void render(List<Mobject> mobjects, AABB aabb) {
    var family = [for (var mob in mobjects) ...mob.getFamily()].reversed;

    for (var mobject in family) {
      if (mobject is VMobject) {
        display.renderer.renderVMobject(mobject, aabb);
      } else {
        display.renderer.renderMobject(mobject, aabb);
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
