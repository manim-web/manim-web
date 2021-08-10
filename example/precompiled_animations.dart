import 'package:manim_web/manim.dart';

class PrecompiledTest extends Scene {
  @override
  FutureOr<void> construct() async {
    await part1();
    await part2();
  }

  @precompiled
  Future part1() async {
    // Precompiled animation
  }

  @runtime // optional
  Future part2() async {
    // Run time animation
  }
}
