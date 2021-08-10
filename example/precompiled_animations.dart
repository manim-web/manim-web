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

// the constant bellow should be defined in manim.
// this is used until precompiled animations are implemented
const precompiled = 3;
const runtime = 3;
