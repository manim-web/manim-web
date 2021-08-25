import 'package:manim_web/src/util/math_functions.dart';

double linear(double t, {double? inflection, double? pauseRatio}) => t;

double smooth(double t, {double? inflection, double? pauseRatio}) {
  inflection ??= 10.0;

  var error = sigmoid(-inflection / 2);

  return clip(
      (sigmoid(inflection * (t - 0.5)) - error) / (1 - 2 * error), 0, 1);
}
