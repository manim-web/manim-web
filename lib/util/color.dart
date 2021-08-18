library utils.color;

import 'dart:math';

import 'package:collection/collection.dart';
import 'package:manim_web/util/array.dart';
import 'package:manim_web/util/bezier.dart';

class Color {
  // The color's components (r, g, b and a) should be from 0.0 to 1.0

  final double r;
  final double g;
  final double b;
  final double a;

  const Color({this.r = 0.0, this.g = 0.0, this.b = 0.0, this.a = 1.0});
  const Color.Gray(double gray, {this.a = 1.0})
      : r = gray,
        g = gray,
        b = gray;

  factory Color.FromHSV(
          {double h = 0.0, double s = 0.0, double v = 0.0, double a = 1.0}) =>
      _colorFromHSV(h, s, v).withTransparency(a);

  factory Color.FromHex(String hex) => _colorFromHex(hex);

  Color withTransparency(double a) {
    return Color(r: r, g: g, b: b, a: a);
  }

  //* Expected : num or Color
  Color operator +(dynamic v) {
    if (v is double) {
      return Color(r: r + v, g: g + v, b: b + v);
    } else if (v is Color) {
      return Color(r: r + v.r, g: g + v.g, b: b + v.b);
    } else {
      throw 'Color only support addition by double or Color';
    }
  }

  //* Expected : num or Color
  Color operator -(dynamic v) {
    if (v is double) {
      return Color(r: r - v, g: g - v, b: b - v);
    } else if (v is Color) {
      return Color(r: r - v.r, g: g - v.g, b: b - v.b);
    } else {
      throw 'Color only support subtraction by double or Color';
    }
  }

  //* Expected : num or Color
  Color operator *(dynamic v) {
    if (v is num) {
      return Color(r: r * v, g: g * v, b: b * v);
    } else if (v is Color) {
      return Color(r: r * v.r, g: g * v.g, b: b * v.b);
    } else {
      throw 'Color only support multiplication by double or Color';
    }
  }

  //* Expected : num or Color
  Color operator /(dynamic v) {
    if (v is double) {
      return Color(r: r / v, g: g / v, b: b / v);
    } else if (v is Color) {
      return Color(r: r / v.r, g: g / v.g, b: b / v.b);
    } else {
      throw 'Color only support division by double or Color';
    }
  }

  Color copy() {
    return Color(r: r, g: g, b: b, a: a);
  }

  Color withValues({double? r, double? g, double? b, double? a}) =>
      Color(r: r ?? this.r, g: g ?? this.g, b: b ?? this.b, a: a ?? this.a);

  List<double> toList({bool withAlpha = true}) {
    return [r, g, b, if (withAlpha) a];
  }

  List<int> toIntRGBA() => [
        for (var comp in [r, g, b, a]) (comp * 255).toInt()
      ];

  List<int> toIntRGB() => [
        for (var comp in [r, g, b]) (comp * 255).toInt()
      ];

  String toRGBString() =>
      'rgb(${(r * 255).toInt()}, ${(g * 255).toInt()}, ${(b * 255).toInt()})';
  String toRGBAString() =>
      'rgba(${(r * 255).toInt()}, ${(g * 255).toInt()}, ${(b * 255).toInt()}, $a)';

  List<double> toHSV() {
    var rgb = toIntRGB();
    var max_ = rgb.reduce(max);
    var min_ = rgb.reduce(min);
    var d = max_ - min_;

    var h = 0.0;
    var s = (max_ == 0 ? 0.0 : d / max_);
    var v = max_ / 255;

    var r = rgb[0]; // from 0 to 255
    var g = rgb[1]; // from 0 to 255
    var b = rgb[2]; // from 0 to 255

    if (max_ == min_) {
      h = 0.0;
    } else if (max_ == r) {
      h = ((g - b) + d * (g < b ? 6 : 0)) / (6 * d);
    } else if (max_ == g) {
      h = ((b - r) + d * 2) / (6 * d);
    } else if (max_ == b) {
      h = ((r - g) + d * 4) / (6 * d);
    }

    return [h, s, v];
  }

  List<int> toIntHSV() => [for (var c in toHSV()) (c * 255).toInt()];

  // TODO Fix this, with this algorithm inverted orange gives brown
  // TODO A more clever way of inverting a color may be needed
  Color invertAndPreserve() {
    // Invert the color but keep the hue and saturation

    var hsv = toHSV();
    var h = hsv[0];
    var s = hsv[1];
    var v = hsv[2];

    return Color.FromHSV(h: h, s: s, v: 1 - v);
  }

  @override
  String toString() => toRGBAString();
}

List<Color> colorGradient(List<Color> referenceColors, int outputLength) {
  if (outputLength == 0) {
    return [];
  }

  var alphas =
      linspace(start: 0, end: referenceColors.length - 1, count: outputLength)
          .getColumn(0);

  var floors = [for (var a in alphas) a.floor()];
  var mod1 = [for (var a in alphas) a % 1];

  mod1.last = 1;
  floors.last = referenceColors.length - 2;

  return [
    for (var k in IterableZip([floors, mod1]))
      interpolate(referenceColors[k.first.toInt()],
          referenceColors[k.first.toInt() + 1], k.last.toDouble())
  ];
}

Color _colorFromHSV(double h, double s, double v) {
  var i = (h * 6).floor();
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      {
        return Color(r: v, g: t, b: p);
      }
    case 1:
      {
        return Color(r: q, g: v, b: p);
      }
    case 2:
      {
        return Color(r: p, g: v, b: t);
      }
    case 3:
      {
        return Color(r: p, g: q, b: v);
      }
    case 4:
      {
        return Color(r: t, g: p, b: v);
      }
    case 5:
      {
        return Color(r: v, g: p, b: q);
      }
  }

  throw 'HSV values must be between 0 and 1';
}

Color _colorFromHex(String hex) {
  if (hex.startsWith('#')) {
    hex = hex.replaceFirst('#', '');
  }

  // rgb or rgba or rrggbb or rrggbbaa
  var possibleLengths = [3, 4, 6, 8];

  if (!possibleLengths.contains(hex.length)) {
    throw 'Hex string #$hex not well formated';
  }

  if (hex.length == 3 || hex.length == 4) {
    // get all characters and double them

    hex = [
      for (var char in hex.split('')) ...[char, char]
    ].join('');
  }

  if (hex.length == 6) {
    // add alpha component
    hex += 'ff';
  }

  var getComponent = (String part) => int.parse(part, radix: 16) / 255;

  var rStr = hex.substring(0, 2);
  var gStr = hex.substring(2, 4);
  var bStr = hex.substring(4, 6);
  var aStr = hex.substring(6, 8);

  return Color(
    r: getComponent(rStr),
    g: getComponent(gStr),
    b: getComponent(bStr),
    a: getComponent(aStr),
  );
}
