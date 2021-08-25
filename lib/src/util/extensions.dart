import 'package:manim_web/src/util/array.dart';

extension StringUtils on String {
  bool get isUpperCase => this == toUpperCase();
  bool get isLowerCase => !isUpperCase;

  int count(Pattern pattern) => split(pattern).length - 1;

  // split a string by a given pattern but keep the
  // content of the pattern inside
  // for example with RegExp('{{(.*?)}}'), group 1's
  // content will also be added to the list
  List<String> splitWithContent(Pattern pattern) {
    var parts = split(pattern);
    var matches = pattern.allMatches(this).toList();
    var count = parts.length + matches.length;

    var result = <String>[];

    for (var i in range(end: count)) {
      if (i % 2 == 0) {
        var j = i ~/ 2;
        result.add(parts[j]);
      } else {
        var j = (i - 1) ~/ 2;
        var match = matches[j];
        var matchContent = match
            .groups(range(end: match.groupCount + 1, start: 1))
            .where((e) => e != null)
            .cast<String>()
            .toList();
        result.addAll(matchContent);
      }
    }

    return result;
  }
}

extension FutureUtils<T> on Future<T> {
  T awaitSync({void Function()? whileWaiting}) {
    whileWaiting ??= () {};

    var done = true;
    T? value;

    then((_value) {
      done = true;
      value = _value;
    });

    while (!done) {
      whileWaiting();
    }

    return value!;
  }
}

extension ListUtils<T> on List<T> {
  List<T> get uniqueValues {
    var uniques = <T>[];

    for (var val in this) {
      if (!uniques.contains(val)) {
        uniques.add(val);
      }
    }

    return uniques;
  }
}
