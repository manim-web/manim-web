import 'package:tuple/tuple.dart';

List<Tuple2<int, T>> enumerate<T>(Iterable<T> iter) {
  var res = <Tuple2<int, T>>[];
  var list = iter.toList();

  for (var i = 0; i < list.length; i++) {
    res.add(Tuple2(i, list[i]));
  }

  return res;
}
