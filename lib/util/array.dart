library utils.array;

import 'dart:math';

import 'package:tuple/tuple.dart';
import 'package:collection/collection.dart';

import 'package:manim_web/util/bezier.dart';
import 'package:manim_web/util/space_ops.dart';

List<int> range({int start = 0, required int end, int step = 1}) {
  assert(step != 0);

  var result = <int>[];

  if (step > 0) {
    for (var i = start; i < end; i += step) {
      result.add(i);
    }
  } else {
    for (var i = start; i > end; i += step) {
      result.add(i);
    }
  }

  return result;
}

List<Tuple2<int, T>> enumerate<T>(List<T> list) {
  if (list.isEmpty) {
    return [];
  }

  var result = <Tuple2<int, T>>[];

  for (var i = 0; i < list.length; i++) {
    result.add(Tuple2(i, list[i]));
  }

  return result;
}

var listEqual =
    <T>(Iterable<T> a, Iterable<T> b) => DeepCollectionEquality().equals(a, b);

T sum<T extends num>(List<T> l) {
  if (l.isEmpty) {
    return 0.0 as T;
  }

  return l.reduce((acc, val) => (acc).toDouble() + (val).toDouble() as T);
}

int argmax(List<num> array) {
  return array
      .reduceIndexed((index, previous, element) =>
          array[previous.toInt()] < element ? index : previous)
      .toInt();
}

int argmin(List<num> array) {
  return array
      .reduceIndexed((index, previous, element) =>
          array[previous.toInt()] > element ? index : previous)
      .toInt();
}

Array linspace(
    {required double start, required double end, required int count}) {
  return Array(values: [
    for (var i in range(end: count)) [interpolate(start, end, i / (count - 1))]
  ]);
}

Array arange({double start = 0, required double end, double step = 1}) {
  assert(step != 0);

  var _range = range(start: 0, end: ((end - start) / step).ceil(), step: 1);
  var result = [
    for (var x in _range) [x * step + start]
  ];

  return Array(values: result);
}

List<T> unique<T>(List<T> nonUnique) {
  var uniqueSet = Set<T>.from(nonUnique);
  return uniqueSet.toList();
}

List<T> stretchListToLength<T>(List<T> list, int length) {
  if (list.isEmpty) {
    return list;
  }

  var currentLength = list.length;

  if (currentLength > length) {
    throw 'Trying to stretch an array to a length shorter than its own';
  }

  var indices =
      range(end: length).map((e) => e.toDouble() / length * currentLength);

  return [for (var i in indices) list[i.toInt()]];
}

Tuple2<List<A>, List<B>> makeEven<A, B>(List<A> listA, List<B> listB) {
  var length = max(listA.length, listB.length);

  return Tuple2(
      [for (var n in range(end: length)) listA[(n * listA.length) ~/ length]],
      [for (var n in range(end: length)) listB[(n * listB.length) ~/ length]]);
}

List<T> withoutFirst<T>(List<T> list) {
  return list.whereIndexed((index, element) => index != 0).toList();
}

List<T> withoutLast<T>(List<T> list) {
  var copy = [...list];
  copy.removeLast();
  return copy;
}

List<T> withoutRedundancies<T>(List<T> list) {
  var reversedResult = <T>[];
  var used = <T>{}; // "used" is Set<T>()
  for (var x in list.reversed) {
    if (!used.contains(x)) {
      reversedResult.add(x);
      used.add(x);
    }
  }

  return reversedResult.reversed.toList();
}

List<Tuple2<List<T>, B>> batchByProperty<T, B>(
    List<T> items, B Function(T) propertyFunc) {
  var batchPropPairs = <Tuple2<List<T>, B>>[];

  void addBatchPropPair(List<T> batch) {
    if (batch.isNotEmpty) {
      batchPropPairs.add(Tuple2(batch, propertyFunc(batch.first)));
    }
  }

  var currentBatch = <T>[];
  B? currentProp;

  for (var item in items) {
    var prop = propertyFunc(item);

    if (prop != currentProp) {
      addBatchPropPair(currentBatch);
      currentProp = prop;
      currentBatch = [item];
    } else {
      currentBatch.add(item);
    }
  }

  addBatchPropPair(currentBatch);

  return batchPropPairs;
}

List<List<T>> adjacentNTuples<T>(List<T> objects, int n) {
  return [
    for (var i in range(end: objects.length))
      [for (var offset in range(end: n)) objects[(i + offset) % objects.length]]
  ];
}

List<List<T>> adjacentPairs<T>(List<T> objects) => adjacentNTuples(objects, 2);
