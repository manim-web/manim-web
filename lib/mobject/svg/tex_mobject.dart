import 'dart:math';

import 'package:html/dom.dart';
import 'package:manim_web/constants.dart';
import 'package:manim_web/mobject/svg/svg_mobject.dart';
import 'package:manim_web/mobject/types/vectorized_mobject.dart';
import 'package:manim_web/util/array.dart';
import 'package:manim_web/util/color.dart';
import 'package:manim_web/util/extensions.dart';
import 'package:manim_web/util/tex_generation.dart';
import 'package:tuple/tuple.dart';

class TexSymbol extends SVGPathMobject {
  TexSymbol(String pathString) : super(pathString);

  TexSymbol.copyFrom(TexSymbol mob) : super.copyFrom(mob);

  @override
  TexSymbol copy() => TexSymbol.copyFrom(this);
}

const TEX_MOB_SCALE_FACTOR = 0.0005;

class SingleStringMathTex extends SVGMobject {
  String texString;

  @override
  double? height;

  SingleStringMathTex(this.texString, {Color color = WHITE})
      : height = null,
        super('') {
    this.color = color;
    createMobject();
  }

  SingleStringMathTex.copyFrom(SingleStringMathTex mob)
      : texString = mob.texString,
        super.copyFrom(mob);

  // When creating a SingleStringMathTex, it can be easier to defer
  // the creation of the mobject, by calling createMobject() later
  SingleStringMathTex.deferred({Color color = WHITE})
      : texString = '',
        super('') {
    this.color = color;
  }

  static Future preload(List<String> texStrings) async {
    texStrings =
        texStrings.uniqueValues.map((e) => getModifiedExpression(e)).toList();

    var svgs = await Future.wait(
        [for (var texString in texStrings) getSVG(texString)]);

    for (var i in range(end: texStrings.length)) {
      TexSVGCache[texStrings[i]] = svgs[i];
    }
  }

  static Map<String, String> TexSVGCache = {};

  void createMobject() {
    texString = getModifiedExpression(texString);

    if (TexSVGCache.containsKey(texString)) {
      content = TexSVGCache[texString]!;
    } else {
      print('$texString should be preloaded to improve performance');
      var content = getSVG(texString).awaitSync();

      TexSVGCache[texString] = content;
    }

    clearPoints();
    submobjects = [];

    generatePoints();
    moveIntoPosition();
    setColor(color: color);

    scaleUniformly(TEX_MOB_SCALE_FACTOR);
  }

  static Future<String> getSVG(String texString) {
    var fullTexDocument = getTexDocument(texString);
    return getTexSVG(fullTexDocument);
  }

  @override
  String toString() => '${getName()}($texString)';

  static String getModifiedExpression(String texString) {
    var result = texString.trim();
    result = modifySpecialStrings(texString);
    return result;
  }

  static String modifySpecialStrings(String tex) {
    var shouldAddFiller = (tex == r'\over' ||
        tex == r'\overline' ||
        tex == r'\sqrt' ||
        tex == r'\sqrt{' ||
        tex.endsWith('_') ||
        tex.endsWith('^') ||
        tex.endsWith('dot'));

    if (shouldAddFiller) {
      tex += r'{\quad}';
    }

    if (tex == r'\substack') {
      tex = r'\quad';
    }

    if (tex.isEmpty) {
      tex = r'\quad';
    }

    if (tex.startsWith(r'\\')) {
      tex = tex.replaceAll(r'\\', r'\quad\\');
    }

    var numLefts = [
      for (var s in withoutFirst(tex.split(r'\left')))
        if (s.isNotEmpty && r'(){}[]|.\'.contains(s[0])) s
    ].length;

    var numRights = [
      for (var s in withoutFirst(tex.split(r'\right')))
        if (s.isNotEmpty && r'(){}[]|.\'.contains(s[0])) s
    ].length;

    if (numLefts != numRights) {
      tex = tex.replaceAll(r'\left', r'\big');
      tex = tex.replaceAll(r'\right', r'\big');
    }

    tex = removeStrayBraces(tex);

    return tex;
  }

  static String removeStrayBraces(String tex) {
    var numLefts = tex.count('{') - tex.count(r'\{') + tex.count(r'\\{');
    var numRights = tex.count('}') - tex.count(r'\}') + tex.count(r'\\}');

    while (numRights > numLefts) {
      tex = '{' + tex;
      numLefts++;
    }
    while (numLefts > numRights) {
      tex = tex + '}';
      numRights++;
    }

    return tex;
  }

  @override
  VMobject pathStringToMobject(String pathString, SVGElementStyle style,
      [Element? element]) {
    var mob = TexSymbol(pathString);

    if (element != null) {
      return applyStyle(style.update(getElementStyle(element)), mob);
    } else {
      return applyStyle(style, mob);
    }
  }

  String getTexString() => texString;
}

class MathTex extends SingleStringMathTex {
  String argSeparator;
  List<String> subStringToIsolate;
  Map<String, Color> texToColorMap;
  List<String> texStrings = [];

  MathTex(
    String originalTexString, {
    Color color = WHITE,
    this.argSeparator = ' ',
    this.texToColorMap = const {},
    this.subStringToIsolate = const [],
  }) : super.deferred(color: color) {
    texStrings = breakUpTexStrings(
      originalTexString,
      subStringToIsolate,
      texToColorMap,
    );
    texString = texStrings.join(argSeparator);
    createMobject();
    breakUpBySubstrings();
    setColorByTexToColorMap(texToColorMap);
  }

  /// [strings] is a list of tuples containing both the tex
  /// string and the substrings to isolate
  static Future preload(List<Tuple2<String, List<String>>> strings,
      {String separator = ' '}) async {
    var texStringsToLoad = <String>[];
    for (var s in strings) {
      var texStrings = breakUpTexStrings(s.item1, s.item2, {});
      var fullString = texStrings.join(separator);
      texStringsToLoad.addAll([fullString, ...texStrings]);
    }

    await SingleStringMathTex.preload(texStringsToLoad);
  }

  MathTex.copyFrom(MathTex mob)
      : argSeparator = mob.argSeparator,
        subStringToIsolate = [...mob.subStringToIsolate],
        texStrings = [...mob.texStrings],
        texToColorMap = mob.texToColorMap,
        super.copyFrom(mob);

  static List<String> breakUpTexStrings(String texString,
      List<String> subStringToIsolate, Map<String, Color> texToColorMap) {
    var texStrings = texString.splitWithContent(RegExp('{{(.*?)}}'));
    var patterns = [
      for (var ss in [...texToColorMap.keys, ...subStringToIsolate])
        '(${RegExp.escape(ss)})'
    ];
    var pattern = patterns.join('|');
    var pieces = <String>[];

    if (pattern.isNotEmpty) {
      var regex = RegExp(pattern);

      for (var s in texStrings) {
        pieces.addAll(s.splitWithContent(regex));
      }
    } else {
      pieces = texStrings;
    }

    return [
      for (var p in pieces)
        if (p.isNotEmpty) p
    ];
  }

  void breakUpBySubstrings() {
    var newSubMobjects = <SingleStringMathTex>[];
    var currentIndex = 0;

    for (var texString in texStrings) {
      var subTexMob = SingleStringMathTex(texString);
      var numSubmobs = subTexMob.submobjects.length;
      var newIndex =
          currentIndex + numSubmobs + argSeparator.split(' ').join('').length;

      if (numSubmobs == 0) {
        subTexMob.submobjects = [VectorizedPoint()];
        var lastSubMobIndex = min(currentIndex, submobjects.length - 1);
        subTexMob.moveToMobject(submobjects[lastSubMobIndex],
            alignedEdge: RIGHT);
      } else {
        subTexMob.submobjects =
            submobjects.getRange(currentIndex, newIndex).toList();
      }

      newSubMobjects.add(subTexMob);
      currentIndex = newIndex;
    }

    submobjects = newSubMobjects;
  }

  List<SingleStringMathTex> getPartsByTex(String tex,
      {bool substring = true, bool caseSensitive = true}) {
    var test = (String tex1, String tex2) {
      if (!caseSensitive) {
        tex1 = tex1.toLowerCase();
        tex2 = tex2.toLowerCase();
      }

      if (substring) {
        return tex2.contains(tex1);
      } else {
        return tex1 == tex2;
      }
    };

    return [
      for (var m in submobjects)
        if (m is SingleStringMathTex && test(tex, m.getTexString())) m
    ];
  }

  SingleStringMathTex? getPartByTex(String tex,
      {bool substring = true, bool caseSensitive = true}) {
    var allParts =
        getPartsByTex(tex, substring: substring, caseSensitive: caseSensitive);
    return allParts.isNotEmpty ? allParts.first : null;
  }

  void setColorByTex(String tex, Color color,
      {bool substring = true, bool caseSensitive = true}) {
    var partsToColor =
        getPartsByTex(tex, substring: substring, caseSensitive: caseSensitive);
    for (var part in partsToColor) {
      part.setColor(color: color);
    }
  }

  void setColorByTexToColorMap(Map<String, Color> texsToColorMap,
      {bool substring = true, bool caseSensitive = true}) {
    for (var entry in texsToColorMap.entries) {
      setColorByTex(entry.key, entry.value,
          substring: substring, caseSensitive: caseSensitive);
    }
  }

  int indexOfPart(SingleStringMathTex? part) {
    var splitSelf = split();

    if (part == null) {
      throw 'Trying to get index of part not in MathTex';
    }

    var index = splitSelf.indexOf(part);

    if (index < 0) {
      throw 'Trying to get index of part not in MathTex';
    }

    return index;
  }

  int indexOfPartByTex(String tex,
      {bool substring = true, bool caseSensitive = true}) {
    var part =
        getPartByTex(tex, substring: substring, caseSensitive: caseSensitive);
    return indexOfPart(part);
  }

  void sortAlphabetically() {
    submobjects
        .cast<SingleStringMathTex>()
        .sort((a, b) => a.getTexString().compareTo(b.getTexString()));
  }
}
