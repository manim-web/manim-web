library mobjects.svg;

import 'dart:math';

import 'package:html/dom.dart';
import 'package:html/parser.dart';
import 'package:manim_web/constants.dart';
import 'package:manim_web/mobject/geometry.dart';
import 'package:manim_web/mobject/types/vectorized_mobject.dart';
import 'package:manim_web/util/array.dart';
import 'package:manim_web/util/color.dart';
import 'package:manim_web/util/math_functions.dart';
import 'package:manim_web/util/space_ops.dart';
import 'package:manim_web/util/extensions.dart';
import 'package:manim_web/util/vector.dart';
import 'package:tuple/tuple.dart';

class SVGMobject extends VMobject {
  bool shouldCenter = true;
  double? height = 2;
  double? width;
  // content of the SVG instead of the fileName
  String content;
  bool unpackGroups = true;

  SVGMobject(this.content) {
    if (hasPoints()) {
      moveIntoPosition();
    }
  }

  SVGMobject.copyFrom(SVGMobject mob)
      : content = mob.content,
        height = mob.height,
        width = mob.width,
        shouldCenter = mob.shouldCenter,
        unpackGroups = mob.unpackGroups,
        super.copyFrom(mob);

  @override
  SVGMobject copy() => SVGMobject.copyFrom(this);

  Map<String, Element> refToElement = {};

  static Map<String, SVGMobject> SVGMobjectCache = {};

  @override
  void generatePoints() {
    if (SVGMobjectCache.containsKey(content)) {
      var mob = SVGMobjectCache[content]!.copy();
      submobjects = mob.submobjects;
      height = mob.height;
      width = mob.width;
      unpackGroups = mob.unpackGroups;
      shouldCenter = mob.shouldCenter;
      return;
    }

    var doc = parse(content);
    for (var svg in doc.getElementsByTagName('svg')) {
      var mobjects = getMobjectsFrom(svg, SVGElementStyle(fillColor: BLACK));
      if (unpackGroups) {
        add(mobjects);
      } else {
        add(mobjects.first.submobjects);
      }
    }

    SVGMobjectCache[content] = copy();
  }

  List<VMobject> getMobjectsFrom(
      Element element, SVGElementStyle initialStyle) {
    var result = <VMobject>[];
    var tagName = element.localName?.toLowerCase();
    var style = initialStyle.update(getElementStyle(element));

    if (tagName == 'defs') {
      updateRefToElement(element);
    } else if (tagName == 'style') {
      // don't handle style
    } else if (['g', 'svg', 'symbol'].contains(tagName)) {
      result.addAll([
        for (var child in element.children) ...getMobjectsFrom(child, style)
      ]);
    } else if (tagName == 'path') {
      var pathData = element.attributes['d'];
      if (pathData != null && pathData.isNotEmpty) {
        result.add(pathStringToMobject(pathData, style, element));
      }
    } else if (tagName == 'use') {
      result.addAll(useToMobjects(element, style));
    } else if (tagName == 'rect') {
      result.add(rectToMobject(element, style));
    } else if (tagName == 'ellipse') {
      result.add(ellipseToMobject(element, style));
    } else if (tagName == 'circle') {
      result.add(circleToMobject(element, style));
    } else if (tagName == 'polygon' || tagName == 'polyline') {
      result.add(polygonToMobject(element, style));
    } else {
      print('Unknown SVG element $tagName');
    }

    var vgroup = VGroup(result);

    handleTransforms(element, vgroup);

    if (result.length > 1 && !unpackGroups) {
      result = [vgroup];
    }

    return result;
  }

  VMobject pathStringToMobject(String pathString, SVGElementStyle style,
      [Element? element]) {
    var mob = SVGPathMobject(pathString);

    if (element != null) {
      return applyStyle(style.update(getElementStyle(element)), mob);
    } else {
      return applyStyle(style, mob);
    }
  }

  List<VMobject> useToMobjects(Element useElement, SVGElementStyle style) {
    //! I don't know why it doesn't work
    // var ref = useElement.attributes['xlink:href'];

    // Temporary fix
    var attributes = useElement.attributes;
    var keys = attributes.keys.toList();
    var values = attributes.values.toList();

    var k = keys.indexWhere((element) =>
        element.toString().contains('href') &&
        element.toString().contains('xlink'));

    var ref = k >= 0 ? values[k] : null;
    // End of fix

    ref = withoutFirst(ref?.split('#') ?? []).join('');

    if (!refToElement.containsKey(ref)) {
      print('SVG ref $ref not recognized');
    }

    return getMobjectsFrom(
        refToElement[ref]!, style.update(getElementStyle(useElement)));
  }

  double attributeToDouble(String? attribute) {
    if (attribute == '' || attribute == null || attribute == 'none') {
      attribute = '0.0';
    }

    var allowedChars = [...digits, '+', '-', '.', 'e', 'E'];

    var strippedAttribute = [
      for (var char in attribute.split(''))
        if (allowedChars.contains(char)) char
    ].join();

    return double.parse(strippedAttribute);
  }

  VMobject polygonToMobject(Element polygonElement, SVGElementStyle style) {
    var pathString = polygonElement.attributes['points']!;
    for (var digit in digits) {
      pathString = pathString.replaceAll(' $digit', ' L$digit');
    }

    style = style.update(getElementStyle(polygonElement));

    var mob = pathStringToMobject('M$pathString', style);
    return applyStyle(style.update(getElementStyle(polygonElement)), mob);
  }

  VMobject circleToMobject(Element circleElement, SVGElementStyle style) {
    var x = attributeToDouble(circleElement.attributes['cx']);
    var y = attributeToDouble(circleElement.attributes['cy']);
    var r = attributeToDouble(circleElement.attributes['r']);

    var mob = Circle(radius: r)..shift(RIGHT * x + DOWN * y);
    return applyStyle(style.update(getElementStyle(circleElement)), mob);
  }

  VMobject ellipseToMobject(Element ellipseElement, SVGElementStyle style) {
    var x = attributeToDouble(ellipseElement.attributes['cx']);
    var y = attributeToDouble(ellipseElement.attributes['cy']);
    var rx = attributeToDouble(ellipseElement.attributes['rx']);
    var ry = attributeToDouble(ellipseElement.attributes['ry']);

    var mob = Ellipse(width: rx * 2, height: ry * 2)
      ..shift(RIGHT * x + DOWN * y);
    return applyStyle(style.update(getElementStyle(ellipseElement)), mob);
  }

  Color? convertColor(String? color) {
    if (color == '' || color == 'none') {
      return TRANSPARENT;
    }
    if (color == null) {
      return null;
    }

    var hexColorLength = [3, 4, 6, 8];

    if (color == 'currentcolor') {
      return this.color;
    } else if (color.startsWith('rgba')) {
      var componentsString =
          color.split('').getRange(5, color.length - 1).join();
      var components = componentsString.split(',');

      return Color(
        r: double.parse(components[0]),
        g: double.parse(components[1]),
        b: double.parse(components[2]),
        a: double.parse(components[3]),
      );
    } else if (color.startsWith('rgb')) {
      var componentsString =
          color.split('').getRange(4, color.length - 1).join();
      var components = componentsString.split(',');

      return Color(
        r: double.parse(components[0]),
        g: double.parse(components[1]),
        b: double.parse(components[2]),
      );
    } else if (color.startsWith('#') || hexColorLength.contains(color.length)) {
      return Color.FromHex(color);
    } else {
      print('unimplented type of color: $color');
      return null;
    }
  }

  VMobject applyStyle(SVGElementStyle style, VMobject mob) {
    mob.setStyle(
      fillColor: style.fillColor,
      strokeColor: style.strokeColor,
      strokeWidth: style.strokeWidth,
    );

    return mob;
  }

  SVGElementStyle getElementStyle(Element element) {
    var _fillColor = element.attributes['fill']?.toLowerCase();
    var _strokeColor = element.attributes['stroke']?.toLowerCase();
    var _strokeWidth = element.attributes['stroke-width'];

    var fillColor = convertColor(_fillColor);
    var strokeColor = convertColor(_strokeColor);
    var strokeWidth = attributeToDouble(_strokeWidth);

    return SVGElementStyle(
      fillColor: fillColor,
      strokeColor: strokeColor,
      strokeWidth: strokeWidth,
    );
  }

  VMobject rectToMobject(Element rectElement, SVGElementStyle style) {
    var _cornerRadius = rectElement.attributes['rx'];
    var cornerRadius = attributeToDouble(_cornerRadius);

    VMobject mob;

    if (cornerRadius == 0.0) {
      mob = Rectangle(
        width: attributeToDouble(rectElement.attributes['width']),
        height: attributeToDouble(rectElement.attributes['height']),
      );
    } else {
      mob = RoundedRectangle(
        width: attributeToDouble(rectElement.attributes['width']),
        height: attributeToDouble(rectElement.attributes['height']),
        cornerRadius: cornerRadius,
      );
    }

    mob.shift(mob.getCenter() - mob.getCorner(UL));
    return applyStyle(style.update(getElementStyle(rectElement)), mob);
  }

  void handleTransforms(Element element, VMobject mobject) {
    if (element.attributes['x'] != null && element.attributes['y'] != null) {
      var x = attributeToDouble(element.attributes['x']);
      var y = attributeToDouble(element.attributes['y']);

      mobject.shift(RIGHT * x + DOWN * y);
    }

    var transform = element.attributes['transform'] ?? '';
    var transformNames = [
      'matrix',
      'translate',
      'scale',
      'rotate',
      'skewX',
      'skewY'
    ];

    var transformRegex =
        RegExp([for (var x in transformNames) x + r'[^)]*\)'].join('|'));
    var transforms = transformRegex.allMatches(transform);

    var numberRegex = RegExp(r'[-+]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][-+]?\d+)?');

    for (var t in transforms) {
      var opData = t.group(0)!.split('(');
      var opName = opData[0].trim();
      var opArgs = [
        for (var x in numberRegex.allMatches(opData[1]))
          double.parse(x.group(0)!)
      ];

      switch (opName) {
        case 'matrix':
          var transformArgs = Array(values: [opArgs]).reshape(3, 2);
          var x = transformArgs[Tuple2(2, 0)];
          var y = transformArgs[Tuple2(2, 1)];

          var matrix = Array.identity(3);
          matrix[Tuple2(0, 0)] = transformArgs[Tuple2(0, 0)];
          matrix[Tuple2(0, 1)] = transformArgs[Tuple2(0, 1)];
          matrix[Tuple2(1, 0)] = transformArgs[Tuple2(1, 0)];
          matrix[Tuple2(1, 1)] = transformArgs[Tuple2(1, 1)];

          matrix[Tuple2(1, 0)] *= -1;
          matrix[Tuple2(1, 1)] *= -1;
          matrix[Tuple2(1, 2)] *= -1;

          matrix[Tuple2(0, 1)] *= -1;
          matrix[Tuple2(1, 1)] *= -1;
          matrix[Tuple2(2, 1)] *= -1;

          mobject.applyMatrix(matrix);
          mobject.shift(RIGHT * x + DOWN * y);

          break;

        case 'scale':
          var scaleValues = opArgs;

          if (scaleValues.length == 1) {
            mobject.scale(Vector3(scaleValues[0], scaleValues[0], 1),
                aboutPoint: ORIGIN);
          } else if (scaleValues.length == 2) {
            mobject.scale(Vector3(scaleValues[0], scaleValues[1], 1),
                aboutPoint: ORIGIN);
          }

          break;

        case 'translate':
          var x = opArgs[0];
          var y = opArgs.length == 2 ? opArgs[1] : 0;

          mobject.shift(RIGHT * x + DOWN * y);
          break;
      }
    }
  }

  List<Element> getAllChildNodesWithID(Element element) {
    var allChildNodesWithID = <Element>[];

    if (element.attributes.containsKey('id')) {
      return [element];
    }

    for (var e in element.children) {
      allChildNodesWithID.addAll(getAllChildNodesWithID(e));
    }

    return allChildNodesWithID;
  }

  void updateRefToElement(Element defs) {
    for (var elem in getAllChildNodesWithID(defs)) {
      var id = elem.attributes['id']!;
      refToElement[id] = elem;
    }
  }

  void moveIntoPosition() {
    if (shouldCenter) {
      center();
    }

    if (height != null) {
      setHeight(height!);
    }

    if (width != null) {
      setWidth(width!);
    }
  }
}

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

List<double> stringToNumbers(String numString) {
  numString = numString.replaceAll('\n', ',');
  numString = numString.replaceAll('-', ',-');
  numString = numString.replaceAll('e,-', 'e-');

  return [
    for (var s in numString.split(RegExp('[ ,]')))
      if (s.isNotEmpty) double.parse(s)
  ];
}

List<List<T>> grouped<T>(List<T> list, int n) {
  return [
    for (var i in range(end: list.length ~/ n))
      list.skip(i * n).take(n).toList()
  ];
}

List<double> correctOutOfRangeRadii(
    double rx, double ry, double x1p, double y1p) {
  rx = rx.abs();
  ry = ry.abs();

  var lambda = (x1p * x1p) / (rx * rx) + (y1p * y1p) / (ry * ry);

  if (lambda > 1) {
    var sqrtLambda = sqrt(lambda);
    rx *= sqrtLambda;
    ry *= sqrtLambda;
  }

  return [rx, ry];
}

double vectorAngle(double ux, double uy, double vx, double vy) {
  var sign = ux * vy - uy * vx < 0 ? -1 : 1;
  var ua = sqrt(ux * ux + uy * uy);
  var va = sqrt(vx * vx + vy * vy);
  var dot = ux * vx + uy * vy;

  return sign * acos(clip(dot / (ua * va), -1, 1));
}

List<double> getEllipticalArcCenterParameters(double x1, double y1, double rx,
    double ry, double phi, double fA, double fS, double x2, double y2) {
  var cosPhi = cos(phi);
  var sinPhi = sin(phi);

  var x = (x1 - x2) / 2;
  var y = (y1 - y2) / 2;

  var x1p = x * cosPhi + y * sinPhi;
  var y1p = -x * sinPhi + y * cosPhi;

  var r = correctOutOfRangeRadii(rx, ry, x1p, y1p);
  rx = r[0];
  ry = r[1];

  var rx2 = rx * rx;
  var ry2 = ry * ry;
  var x1p2 = x1p * x1p;
  var y1p2 = y1p * y1p;
  var k = sqrt(max(
    (rx2 * ry2 - rx2 * y1p2 - ry2 * x1p2) / (rx2 * y1p2 + ry2 * x1p2),
    0,
  ));

  var sign = fA == fS ? -1 : 1;
  var cxp = sign * k * (rx * y1p) / ry;
  var cyp = sign * k * (-ry * x1p) / rx;

  x = (x1 + x2) / 2;
  y = (y1 + y2) / 2;
  var cx = cxp * cosPhi - cyp * sinPhi + x;
  var cy = cxp * sinPhi + cyp * cosPhi + y;

  x = (x1p - cxp) / rx;
  y = (y1p - cyp) / ry;
  var theta1 = vectorAngle(1, 0, x, y);

  var x_ = (-x1p - cxp) / rx;
  var y_ = (-y1p - cyp) / ry;
  var dtheta = (vectorAngle(x, y, x_, y_) / RADIANS) % 360;

  if (fS == 0 && dtheta > 0) {
    dtheta -= 360;
  } else if (fS == 1 && dtheta < 0) {
    dtheta += 360;
  }

  return [cx, cy, theta1, dtheta * DEGREES];
}

List<Vector3> ellipticalArcToCubicBezier(Vector3 v1, double rx, double ry,
    double phi, double fA, double fS, Vector3 v2) {
  var x1 = v1.x;
  var y1 = v1.y;
  var x2 = v2.x;
  var y2 = v2.y;

  if (rx == 0 || ry == 0) {
    return [v1, v2, v2];
  }

  phi *= DEGREES; // convert to radians

  fA = fA != 0 ? 1 : 0;
  fS = fS != 0 ? 1 : 0;

  var params =
      getEllipticalArcCenterParameters(x1, y1, rx, ry, phi, fA, fS, x2, y2);
  var cx = params[0];
  var cy = params[1];
  var theta1 = params[2];
  var dtheta = params[3];

  var sweepLimit = (dtheta / DEGREES) % 90 == 0 ? 90 : 36;

  var segments = ((dtheta / DEGREES) / sweepLimit).abs().ceil();
  var segment = dtheta / segments;
  var currentAngle = theta1;
  var startX = x1;
  var startY = y1;
  var cosPhi = cos(phi);
  var sinPhi = sin(phi);
  var alpha = sin(segment) * (sqrt(4 + 3 * pow(tan(segment / 2), 2)) - 1) / 3;
  var bezierPoints = <Vector3>[];

  for (var idx in range(end: segments)) {
    var nextAngle = currentAngle + segment;

    var cosStart = cos(currentAngle);
    var sinStart = sin(currentAngle);

    var e1x = -rx * cosPhi * sinStart - ry * sinPhi * cosStart;
    var e1y = -rx * sinPhi * sinStart + ry * cosPhi * cosStart;

    var q1x = startX + alpha * e1x;
    var q1y = startY + alpha * e1y;

    var cosEnd = cos(nextAngle);
    var sinEnd = sin(nextAngle);

    var p2x = cx + rx * cosPhi * cosEnd - ry * sinPhi * sinEnd;
    var p2y = cy + rx * sinPhi * cosEnd + ry * cosPhi * sinEnd;

    var endX = p2x;
    var endY = p2y;

    if (idx == segments - 1) {
      endX = x2;
      endY = y2;
    }
    var e2x = -rx * cosPhi * sinEnd - ry * sinPhi * cosEnd;
    var e2y = -rx * sinPhi * sinEnd + ry * cosPhi * cosEnd;
    var q2X = endX - alpha * e2x;
    var q2Y = endY - alpha * e2y;

    bezierPoints.addAll([
      Vector3(q1x, q1y, 0),
      Vector3(q2X, q2Y, 0),
      Vector3(endX, endY, 0),
    ]);
    startX = endX;
    startY = endY;
    currentAngle = nextAngle;
  }

  return bezierPoints;
}

class SVGPathMobject extends VMobject {
  String pathString;
  Vector3? currentPathStart;

  SVGPathMobject(this.pathString);

  SVGPathMobject.copyFrom(SVGPathMobject mob)
      : pathString = mob.pathString,
        currentPathStart = mob.currentPathStart,
        super.copyFrom(mob);

  @override
  SVGPathMobject copy() => SVGPathMobject.copyFrom(this);

  List<String> getPathCommands() {
    var commands = [
      'M', // moveto
      'L', // lineto
      'H', // horizontal lineto
      'V', // vertical lineto
      'C', // curveto
      'S', // smooth curveto
      'Q', // quadratic Bezier curve
      'T', // smooth quadratic Bezier curveto
      'A', // elliptical Arc
      'Z', // closepath
    ];

    return [...commands, ...commands.map((e) => e.toLowerCase())];
  }

  @override
  void generatePoints() {
    var pattern = '[${getPathCommands().join()}]';
    var regex = RegExp(pattern);
    var commands =
        regex.allMatches(pathString).map((e) => e.group(0)!).toList();
    var coordStrings = withoutFirst(pathString.split(regex));

    String? prevCommand;

    for (var i in range(end: commands.length)) {
      var command = commands[i];
      var coordString = coordStrings[i];
      handleCommand(command, coordString, prevCommand ?? '');
      prevCommand = command;
    }

    rotate(PI, axis: RIGHT, aboutPoint: ORIGIN);
  }

  void handleCommand(String command, String coordString,
      [String prevCommand = '']) {
    var isRelative = command.isLowerCase;
    command = command.toUpperCase();

    var startPoint = hasPoints() ? getLastPoint() : Vector3(0, 0, 0);

    var newPoints = stringToPoints(
      command: command,
      isRelative: isRelative,
      coordString: coordString,
      startPoint: startPoint,
    );

    switch (command) {
      case 'M':
        startNewPath(newPoints[0]);
        for (var p in withoutFirst(newPoints)) {
          addLineTo(p);
        }
        return;

      case 'H':
      case 'V':
      case 'L':
        for (var p in newPoints) {
          addLineTo(p);
        }
        return;

      case 'C':
        for (var i in range(end: newPoints.length, step: 3)) {
          addCubicBezierCurveTo(
            newPoints[i + 0],
            newPoints[i + 1],
            newPoints[i + 2],
          );
        }
        return;

      case 'S':
        var prevHandle = startPoint;

        if (['C', 'S'].contains(prevCommand.toUpperCase())) {
          prevHandle = points[points.length - 2];
        }

        for (var i in range(end: newPoints.length, step: 2)) {
          var newHandle = startPoint * 2 - prevHandle;
          addCubicBezierCurveTo(newHandle, newPoints[i], newPoints[i + 1]);
          startPoint = newPoints[i + 1];
          prevHandle = newPoints[i];
        }

        return;

      case 'Q':
        for (var i in range(end: newPoints.length, step: 2)) {
          addQuadraticBezierCurveTo(newPoints[i], newPoints[i + 1]);
        }
        return;

      case 'T':
        var prevQuadHandle = startPoint;
        if (['Q', 'T'].contains(prevCommand.toUpperCase())) {
          prevQuadHandle = points[points.length - 2] * 1.5 - points.last * 0.5;
        }

        for (var p in newPoints) {
          var newQuadHandle = startPoint * 2 - prevQuadHandle;
          addQuadraticBezierCurveTo(newQuadHandle, p);
          startPoint = p;
          prevQuadHandle = newQuadHandle;
        }
        return;

      case 'A':
        for (var i in range(end: newPoints.length, step: 3)) {
          addCubicBezierCurveTo(
              newPoints[i], newPoints[i + 1], newPoints[i + 2]);
        }
        return;

      case 'Z':
        closePath();
        return;
    }
  }

  String getOriginalPathString() => pathString;

  List<Vector3> stringToPoints({
    required String command,
    required bool isRelative,
    required String coordString,
    required Vector3 startPoint,
  }) {
    var numbers = stringToNumbers(coordString);
    var result = <Vector3>[];

    if (command == 'A') {
      Vector3? lastEndPoint;

      for (var ellipticNumbers in grouped(numbers, 2)) {
        if (lastEndPoint != null) {
          startPoint = lastEndPoint;
        }

        if (isRelative) {
          ellipticNumbers[5] += startPoint.x;
          ellipticNumbers[6] += startPoint.y;
        }

        if (startPoint.x == ellipticNumbers[5] &&
            startPoint.y == ellipticNumbers[6]) {
          continue;
        }

        result.addAll(
          ellipticalArcToCubicBezier(
            startPoint,
            ellipticNumbers[0],
            ellipticNumbers[1],
            ellipticNumbers[2],
            ellipticNumbers[3],
            ellipticNumbers[4],
            Vector3(ellipticNumbers[5], ellipticNumbers[6], 0),
          ),
        );

        lastEndPoint = Vector3(ellipticNumbers[5], ellipticNumbers[6], 0);
      }

      return result;
    } else if (command == 'H') {
      if (isRelative) {
        result = [for (var x in numbers) Vector3(x, 0, 0)];
      } else {
        result = [for (var x in numbers) Vector3(x, startPoint.y, 0)];
      }
    } else if (command == 'V') {
      if (isRelative) {
        result = [for (var y in numbers) Vector3(0, y, 0)];
      } else {
        result = [for (var y in numbers) Vector3(startPoint.x, y, 0)];
      }
    } else {
      result = [for (var xy in grouped(numbers, 2)) Vector3(xy[0], xy[1], 0)];
    }

    if (!isRelative) {
      return result;
    }

    var entries = 1;

    if (command == 'Q' || command == 'S') {
      entries = 2;
    } else if (command == 'C') {
      entries = 3;
    }

    var offset = startPoint;

    for (var i in range(end: result.length)) {
      result[i] += offset;

      if ((i + 1) % entries == 0) {
        offset = result[i];
      }
    }

    return result;
  }
}

class SVGElementStyle {
  final Color? fillColor;
  final Color? strokeColor;
  final double? strokeWidth;

  const SVGElementStyle({
    this.fillColor,
    this.strokeColor,
    this.strokeWidth,
  });

  SVGElementStyle update(SVGElementStyle style) => SVGElementStyle(
        fillColor: style.fillColor ?? fillColor,
        strokeColor: style.strokeColor ?? strokeColor,
        strokeWidth: style.strokeWidth ?? strokeWidth,
      );

  @override
  String toString() {
    return 'fill: $fillColor, stroke: $strokeColor ${strokeWidth}pt';
  }
}
