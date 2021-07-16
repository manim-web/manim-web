import 'package:manim_web/constants.dart';
import 'package:manim_web/mobject/svg/tex_mobject.dart' as _base_classes;
import 'package:manim_web/util/color.dart';
import 'package:manim_web/util/tex_generation/web.dart';

class SingleStringMathTex extends _base_classes.SingleStringMathTex {
  SingleStringMathTex(String texString, {Color color = WHITE})
      : super(texString, color: color);

  @override
  String getSVG(String texString) => texToSVG(texString);

  SingleStringMathTex.copyFrom(SingleStringMathTex mob) : super.copyFrom(mob);
  @override
  SingleStringMathTex copy() => SingleStringMathTex.copyFrom(this);
}

class MathTex extends _base_classes.MathTex {
  MathTex(
    String texString, {
    Color color = WHITE,
    String argSeparator = ' ',
    Map<String, Color> texToColorMap = const {},
    List<String> subStringToIsolate = const [],
  }) : super(
          texString,
          color: color,
          argSeparator: argSeparator,
          texToColorMap: texToColorMap,
          subStringToIsolate: subStringToIsolate,
        );

  @override
  String getSVG(String texString) => texToSVG(texString);

  MathTex.copyFrom(MathTex mob) : super.copyFrom(mob);
  @override
  MathTex copy() => MathTex.copyFrom(this);

  @override
  SingleStringMathTex getSingleStringMathTex(String texString) =>
      SingleStringMathTex(texString);
}
