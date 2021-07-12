// TODO Remove this when TeX is implemented
import 'package:manim_web/manim.dart';

class Tex extends Text {
  Tex(String content,
      {double fontSize = 32, Vector3 pos = ORIGIN, String font = 'KaTeX_Math'})
      : super(content, fontSize: fontSize, pos: pos, font: font);

  @override
  Tex copy() => Tex.copyFrom(this);

  Tex.copyFrom(Tex text) : super.copyFrom(text);
}
