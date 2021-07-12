import 'dart:math' hide log;
import 'dart:math' as math;

import 'package:manim_web/util/array.dart';

T clip<T extends num>(T val, T lower, T upper) {
  return min(upper, max(val, lower));
}

var _chooseCache = <int, Map<int, int>>{};

int chooseCached(int n, int r) {
  if (!_chooseCache.containsKey(n)) {
    _chooseCache[n] = {};
  }

  if (!(_chooseCache[n])!.containsKey(r)) {
    _chooseCache[n]![r] = choose(n, r, useCache: false);
  }

  return _chooseCache[n]![r]!;
}

int choose(int n, int r, {bool useCache = true}) {
  if (useCache) {
    return chooseCached(n, r);
  }

  if (n < r) {
    return 0;
  }

  if (r == 0) {
    return 1;
  }

  var denom = range(start: 1, end: r + 1).fold<int>(1, (a, b) => a * b);
  var numer =
      range(start: n, end: n - r, step: -1).fold<int>(1, (a, b) => a * b);

  return numer ~/ denom;
}

double sigmoid(double x) => 1 / (1 + exp(-x));

// similar to processing map function
double mapValue(num value, num start1, num stop1, num start2, num stop2) {
  return (value - start1) / (stop1 - start1) * (stop2 - start2) + start2;
}

double log(num x, {num base = e}) => math.log(x) / math.log(base);
double log10(num x) => math.log(x) / ln10;
double log2(num x) => math.log(x) / ln2;
double ln(num x) => math.log(x);
