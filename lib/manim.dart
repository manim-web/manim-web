library manim;

// ./
export 'package:manim_web/constants.dart';

// ./animation/
export 'package:manim_web/animation/animation.dart';
export 'package:manim_web/animation/composition.dart';
export 'package:manim_web/animation/creation.dart';
export 'package:manim_web/animation/fading.dart';
export 'package:manim_web/animation/transform.dart';
export 'package:manim_web/animation/update.dart';

// ./camera/
export 'package:manim_web/camera/camera.dart';

// ./mobject/
export 'package:manim_web/mobject/text_mobject.dart';
export 'package:manim_web/mobject/functions.dart';
export 'package:manim_web/mobject/geometry.dart';
export 'package:manim_web/mobject/shape_matchers.dart';
export 'package:manim_web/mobject/coordinate_systems.dart';

// ./mobject/types/
export 'package:manim_web/mobject/types/mobject.dart';
export 'package:manim_web/mobject/types/vectorized_mobject.dart';
export 'package:manim_web/mobject/types/interactive_mobject.dart';

// ./display/
export 'package:manim_web/display/abstract_display.dart';
// abstract_html_display.dart isn't exported since it may cause problems if executed in another environment than the web.
// canvas_2d_display.dart isn't exported since it may cause problems if executed in another environment than the web.

// ./renderer/
export 'package:manim_web/renderer/abstract_renderer.dart';
// canvas_2d_renderer.dart isn't exported since it may cause problems if executed in another environment than the web.

// ./scene/
export 'package:manim_web/scene/scene.dart';

// ./util/
export 'package:manim_web/util/array.dart';
export 'package:manim_web/util/bezier.dart';
export 'package:manim_web/util/color.dart';
export 'package:manim_web/util/complex.dart';
export 'package:manim_web/util/math_functions.dart';
export 'package:manim_web/util/paths.dart';
export 'package:manim_web/util/rate_functions.dart';
export 'package:manim_web/util/space_ops.dart';
export 'package:manim_web/util/vector.dart';

// ./util/events
export 'package:manim_web/util/events/event.dart';
export 'package:manim_web/util/events/event_dispatcher.dart';
export 'package:manim_web/util/events/event_listener.dart';
export 'package:manim_web/util/events/key_events.dart';
export 'package:manim_web/util/events/mouse_events.dart';

// ./other libraries
export 'dart:math'
    hide
        Rectangle,
        MutableRectangle,
        Point,
        log,
        log10e,
        log2e; // already defined in ./util/math_functions.dart
export 'dart:async';
export 'package:tuple/tuple.dart';
