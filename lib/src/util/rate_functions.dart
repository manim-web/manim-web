typedef RateFunc = double Function(double);

double linear(double t) => t;

double smooth(double t) {
  var s = 1 - t;
  return (t * t * t) * (10 * s * s + 5 * s * t + t * t);
}

double doubleSmooth(double t) =>
    t < 0.5 ? smooth(2 * t) / 2 : (smooth(2 * t - 1) + 1) / 2;

RateFunc invertRateFunc(RateFunc f) => (t) => f(1 - t);
