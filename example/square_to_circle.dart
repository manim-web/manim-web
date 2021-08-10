import 'package:manim_web/manim.dart';

class SquareToCircleScene extends Scene {
  @override
  Future construct() async {
    var circle = Circle();
    var square = Square();

    square
      ..flip(axis: RIGHT)
      ..rotate((-3 / 8) * TAU)
      ..setFill(color: TRANSPARENT);

    circle
      ..setFill(color: PINK.withTransparency(0.5))
      ..setStroke(color: RED_C);

    await play(ShowCreation(square));
    await play(Transform(square, target: circle));
    await play(FadeOut(square));
  }
}
