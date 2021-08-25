import 'dart:math' as math;
import 'dart:math';

import 'package:manim_web/src/util/vector.dart';

class Complex {
  final double real;
  final double imaginary;

  const Complex({required this.real, this.imaginary = 0});
  const Complex.fromDouble(this.real) : imaginary = 0;

  factory Complex.complexExp(Complex c) {
    return Complex.exp(angle: c.imaginary, r: exp(c.real));
  }

  factory Complex.exp({double r = 1, required double angle}) {
    return Complex(real: r * cos(angle), imaginary: r * sin(angle));
  }

  @override
  bool operator ==(dynamic other) =>
      (other is Complex &&
          real == other.real &&
          imaginary == other.imaginary) ||
      (other is num && real == other && imaginary == 0);

  Complex operator +(Complex other) =>
      Complex(real: real + other.real, imaginary: imaginary + other.imaginary);

  Complex operator -(Complex other) => this + (other.scale(-1));

  Complex operator *(Complex other) => Complex(
      real: real * other.real - imaginary * other.imaginary,
      imaginary: real * other.imaginary + imaginary * other.real);

  Complex operator /(Complex other) {
    // ignore: unrelated_type_equality_checks
    assert(other != 0);

    var a = real;
    var b = imaginary;
    var c = other.real;
    var d = other.imaginary;

    return Complex(
        real: (a * c + b * d) / (c * c + d * d),
        imaginary: (b * c - a * d) / (c * c + d * d));
  }

  Complex scale(double k) => this * Complex.fromDouble(k);

  Complex conjugate() => Complex(real: real, imaginary: -imaginary);

  double normSquared() => real * real + imaginary * imaginary;
  double norm() => sqrt(normSquared());

  Complex normalize() => this / Complex.fromDouble(norm());

  Complex copy() => Complex(real: real, imaginary: imaginary);

  Vector3 toVector3({double z = 0}) => Vector3(real, imaginary, z);

  double angle() {
    if (real == 0 && imaginary == 0) {
      return 0;
    }

    return atan2(imaginary, real);
  }

  Complex pow(num k) {
    if (k is int) {
      return List.filled(k, this).reduce((a, b) => a * b);
    } else if (k is double) {
      var angle = this.angle();
      var mag = norm();

      var newAngle = angle * k;
      var newMag = math.pow(mag, k);

      return Complex.exp(angle: newAngle, r: newMag.toDouble());
    } else {
      throw 'Unhandled power operation for type ${k.runtimeType}';
    }
  }
}
