library manim;

// ./
export 'package:manim_web/src/constants.dart';

// ./animation/
export 'package:manim_web/src/animation/animation.dart';
export 'package:manim_web/src/animation/composition.dart';
export 'package:manim_web/src/animation/creation.dart';
export 'package:manim_web/src/animation/fading.dart';
export 'package:manim_web/src/animation/transform.dart';
export 'package:manim_web/src/animation/update.dart';

// ./camera/
export 'package:manim_web/src/camera/camera.dart';

// ./display/
export 'package:manim_web/src/display/abstract_display.dart';
export 'package:manim_web/src/display/empty_display.dart';

// ./mobject/
export 'package:manim_web/src/mobject/coordinate_systems.dart';
export 'package:manim_web/src/mobject/functions.dart';
export 'package:manim_web/src/mobject/geometry.dart';
export 'package:manim_web/src/mobject/shape_matchers.dart';

// ./mobject/svg/
export 'package:manim_web/src/mobject/svg/svg_mobject.dart';
export 'package:manim_web/src/mobject/svg/tex_mobject.dart';

// ./mobject/types/
export 'package:manim_web/src/mobject/types/interactive_mobject.dart';
export 'package:manim_web/src/mobject/types/mobject.dart';
export 'package:manim_web/src/mobject/types/vectorized_mobject.dart';

// ./renderer/
export 'package:manim_web/src/renderer/abstract_renderer.dart';
export 'package:manim_web/src/renderer/empty_renderer.dart';

// ./scene/
export 'package:manim_web/src/scene/scene.dart';

// ./util/
export 'package:manim_web/src/util/array.dart';
export 'package:manim_web/src/util/bezier.dart';
export 'package:manim_web/src/util/color.dart';
export 'package:manim_web/src/util/complex.dart';
export 'package:manim_web/src/util/extensions.dart';
export 'package:manim_web/src/util/math_functions.dart';
export 'package:manim_web/src/util/paths.dart';
export 'package:manim_web/src/util/rate_functions.dart';
export 'package:manim_web/src/util/space_ops.dart';
export 'package:manim_web/src/util/vector.dart';

// ./util/events/
export 'package:manim_web/src/util/events/event.dart';
export 'package:manim_web/src/util/events/event_dispatcher.dart';
export 'package:manim_web/src/util/events/event_listener.dart';
export 'package:manim_web/src/util/events/key_events.dart';
export 'package:manim_web/src/util/events/mouse_events.dart';

// other libraries
export 'dart:math'
    hide
        Rectangle, // avoid confusion with mobjects
        MutableRectangle, // avoid confusion with mobjects
        Point, // avoid confusion with mobjects
        log, // already defined in ./util/math_functions.dart
        log10e, // already defined in ./util/math_functions.dart
        log2e; // already defined in ./util/math_functions.dart
export 'dart:async' show Completer, FutureOr, Future;
export 'package:tuple/tuple.dart';
