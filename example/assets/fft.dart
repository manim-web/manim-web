import 'package:manim_web/manim.dart';

bool isPowerOf2(int n) {
  return (n & (n - 1)) == 0;
}

List<T> getEveryNth<T>(List<T> a, int n, {int offset = 0}) =>
    [for (var i in range(start: offset, end: a.length, step: n)) a[i]];

//TODO Make fft work properly
List<Complex> fft(List<double> x) {
  if (!isPowerOf2(x.length)) {
    var logn = log2(x.length).ceil();
    var toAdd = pow(2, logn).toInt() - x.length;

    // make the list's length a power of 2 by adding zeros
    x.addAll(List.filled(toAdd, 0));
  }

  var n = x.length;
  var xOdd =
      n > 2 ? fft(getEveryNth(x, 2, offset: 0)) : [Complex.fromDouble(x[0])];
  var xEven =
      n > 2 ? fft(getEveryNth(x, 2, offset: 1)) : [Complex.fromDouble(x[1])];

  var m = range(end: n);
  var half = n ~/ 2;
  var factors = [for (var _m in m) Complex.exp(angle: -TAU * _m / n)];

  return [
    ...[for (var i in range(end: half)) xOdd[i] + xEven[i] * factors[i]],
    ...[for (var i in range(end: half)) xOdd[i] - xEven[i] * factors[i]],
  ];
}
