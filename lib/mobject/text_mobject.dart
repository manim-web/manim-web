//TODO This is a placeholder, an implementation of SVGMobject is needed

import 'package:manim_web/constants.dart';
import 'package:manim_web/mobject/types/mobject.dart';
import 'package:manim_web/util/vector.dart';

class Text extends Mobject {
  String content;
  double fontSize;
  String font;

  Text(this.content,
      {this.fontSize = 32, Vector3 pos = ORIGIN, this.font = 'KaTeX_Main'}) {
    points = [pos];
    setColor(color: WHITE);
  }

  @override
  Text copy() => Text.copyFrom(this);

  Text.copyFrom(Text text)
      : content = text.content,
        fontSize = text.fontSize,
        font = text.font,
        super.copyFrom(text);

  @override
  void scale(double scaleFactor,
      {Vector3? aboutPoint, Vector3 aboutEdge = ORIGIN}) {
    fontSize *= scaleFactor;
  }
}
