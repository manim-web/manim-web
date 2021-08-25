import 'dart:html';

import 'package:manim_web/src/constants.dart';
import 'package:manim_web/src/display/abstract_display.dart';
import 'package:manim_web/src/display/canvas_2d_display.dart';
import 'package:manim_web/src/util/array.dart';
import 'package:manim_web/src/util/color.dart';
import 'package:manim_web/src/mobject/types/vectorized_mobject.dart';
import 'package:manim_web/src/mobject/types/mobject.dart';
import 'package:manim_web/src/util/vector.dart';
import 'package:manim_web/src/renderer/abstract_renderer.dart';

class Canvas2DRenderer extends AbstractRenderer {
  Canvas2DRenderer();

  late CanvasRenderingContext2D ctx;

  double time = 0;

  @override
  void setup(AbstractDisplay display) {
    super.setup(display);
    ctx = (display as Canvas2DDisplay).canvas.context2D;
  }

  @override
  void renderBackground(Color backgroundColor) {
    var camera = display.camera;
    var c = display.applyColorTransformation(backgroundColor);
    ctx.fillStyle = c.toRGBAString();

    var x = camera.frameCenter.x - camera.frameWidth / 2;
    var y = camera.frameCenter.y - camera.frameHeight / 2;

    ctx.fillRect(x, y, camera.frameWidth, camera.frameHeight);
  }

  @override
  void renderMobject(Mobject mob) {
    // Mobjects can't be rendered directly
    // They need to be instances of the subclasses
    // For example: VMobject
  }

  @override
  void renderMobjects(List<Mobject> mobs) {
    // Mobjects can't be rendered directly
    // They need to be instances of the subclasses
    // For example: VMobject
  }

  @override
  void renderVMobject(VMobject vmob) {
    var points = transformPointsPreDisplay(vmob, vmob.getPoints());

    if (points.isEmpty) {
      return;
    }

    var subpaths = vmob.getSubpathsFromPoints2D(points);
    var totalPath = '';

    for (var subpath in subpaths) {
      totalPath += getVMobjectSubpath(vmob, subpath);
    }

    var path = Path2D(totalPath);

    applyVMobjectStroke(path, vmob, background: true);
    applyVMobjectFill(path, vmob);
    applyVMobjectStroke(path, vmob, background: false);
  }

  String getVMobjectSubpath(VMobject vmob, List<Vector3> subpath) {
    var path = '';
    var quads = vmob.genCubicBezierTuplesFromPoints(subpath);
    var start = subpath.first;
    path += 'M ${start.x} ${start.y}';

    var closedPath = vmob.considerPointsEquals2D(subpath.first, subpath.last);

    for (var pts in quads) {
      var p1 = pts.item2;
      var p2 = pts.item3;
      var p3 = pts.item4;

      path += ' C ${p1.x} ${p1.y} ${p2.x} ${p2.y} ${p3.x} ${p3.y}';
    }

    if (closedPath) {
      path += ' Z';
    }

    return path;
  }

  CanvasGradient createVMobjectGradient(VMobject vmob, List<Color> colors) {
    var startEnd = vmob.getGradientStartAndEndPoints();
    var points =
        transformPointsPreDisplay(vmob, [startEnd.item1, startEnd.item2]);

    var gradient = ctx.createLinearGradient(
        points[0].x, points[0].y, points[1].x, points[1].y);

    var step = 1 / (colors.length - 1);

    var offsets = arange(start: 0, end: step + 1, step: step).getColumn(0);

    for (var i in range(end: colors.length)) {
      var color = display.applyColorTransformation(colors[i]);
      var offset = offsets[i];

      gradient.addColorStop(offset, color.toRGBAString());
    }

    return gradient;
  }

  void applyVMobjectFill(Path2D path, VMobject vmob) {
    var fillColors = vmob.getFillColors();

    if (fillColors.length > 1) {
      ctx.fillStyle = createVMobjectGradient(vmob, fillColors);
    } else {
      var color = display.applyColorTransformation(vmob.getFillColor());
      ctx.fillStyle = color.toRGBAString();
    }

    ctx.fill(path);
  }

  void applyVMobjectStroke(Path2D path, VMobject vmob,
      {required bool background}) {
    var strokeWidth = vmob.getStrokeWidth(background: background);

    if (strokeWidth == 0) {
      return;
    }

    var strokeColors = vmob.getStrokeColors(background: background);
    var screenSizeFactor = display.camera.getFrameWidth() / FRAME_WIDTH;
    ctx.lineWidth = strokeWidth * lineWidthMultiple * screenSizeFactor;

    var isTransparent = strokeColors.every((color) => color.a == 0);

    if (strokeColors.isEmpty || isTransparent) {
      return;
    }

    if (strokeColors.length > 1) {
      ctx.strokeStyle = createVMobjectGradient(vmob, strokeColors);
    } else {
      var color = display.applyColorTransformation(
          vmob.getStrokeColor(background: background));
      ctx.strokeStyle = color.toRGBAString();
    }

    ctx.stroke(path);
  }

  @override
  void renderVMobjects(List<VMobject> vmobs) {
    for (var vmob in vmobs) {
      renderVMobject(vmob);
    }
  }

  @override
  void setMatrix(double a, double b, double c, double d, double e, double f) {
    ctx.setTransform(a, b, c, d, e, f);
  }
}
