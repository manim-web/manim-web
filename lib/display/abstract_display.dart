/// The display can represent the canvas (in HTML) or a window (in native code).
/// It deals with setting up the renderer ([AbstractRenderer]), and the events ([Event]).
library manim.display.abstract_display;

import 'package:manim_web/camera/camera.dart';
import 'package:manim_web/renderer/abstract_renderer.dart';
import 'package:manim_web/util/color.dart';
import 'package:manim_web/util/events/event.dart';
import 'package:manim_web/util/events/event_dispatcher.dart';
import 'package:manim_web/util/math_functions.dart';
import 'package:manim_web/util/vector.dart';

/// The display can represent the canvas (in HTML) or a window (in native code).
/// It deals with setting up the renderer ([AbstractRenderer]), and the events ([Event]).
/// It's an abstract class
abstract class AbstractDisplay {
  /// [AbstractDisplay] constructor. It calls [createRenderer] to setup the renderer
  AbstractDisplay() {
    renderer = createRenderer();
  }

  //* Rendering

  /// The [renderer] is responsible for rendering mobjects ([Mobject]).
  /// It is created with [createRenderer] and is called from the constructor.
  late AbstractRenderer renderer;

  /// Creates a renderer ([AbstractRenderer]) used to render mobjects ([Mobject]).
  /// {@template abstract_method}
  /// __This method needs to be implemented in subclasses__
  /// {@endtemplate}
  AbstractRenderer createRenderer();

  /// The [camera] is bound to the display with [bindCamera].
  late Camera camera;

  /// Binds the [camera]
  void bindCamera(Camera camera) {
    this.camera = camera;
    setDisplaySize(camera.pixelWidth, camera.pixelHeight);
  }

  /// Sets the width and the height of the display
  /// {@macro abstract_method}
  void setDisplaySize(int width, int height);

  /// Waits for the next frame.
  /// Returns a `Future` containing the time elapsed between frames (in seconds)
  /// {@macro abstract_method}
  Future<double> nextFrame();

  /// When [darkMode] is set to `true`, all the colors
  /// are updated: their brightness is inverted but the
  /// hue doesn't change
  bool darkMode = false;

  /// Apply the [darkMode] if set to true
  /// otherwise return the [color]
  ///
  /// When using [darkMode], the color is transformed by using [Color.invertAndPreserve]
  Color applyColorTransformation(Color color) {
    if (darkMode) {
      return color.invertAndPreserve();
    } else {
      return color;
    }
  }

  //* Events

  /// Binds all the eventListeners
  /// All the events should be converted to [Event] and sent to
  /// the [onEvent] method
  /// {@macro abstract_method}
  void bindEventListeners();

  /// Unbinds all the eventListeners
  /// {@macro abstract_method}
  void unbindEventListeners();

  /// Dispatches the [event] to the corresponding [EventListener]
  /// by using the [EventDispatcher]
  void onEvent(Event event) {
    EventDispatcher.eventDispatcher.dispatch(event);
  }

  //* Coordinate transformations

  /// Converts the pixel coordinates ([pixelX], [pixelY]) to the manim coordinates
  /// The result is returned as a [Vector3], but used as a vector2 containing
  /// the coordinates x and y of the corresponding point
  /// @param [pixelX] from 0 to pixel width
  /// @param [pixelY] from 0 to pixel height
  Vector3 getCoordinates(double pixelX, double pixelY) {
    // map pixelX which can be between 0 and pixelWidth
    // to between -frameWidth / 2 and frameWidth / 2
    var sx = mapValue(pixelX, 0, camera.pixelWidth, -camera.frameWidth / 2,
        camera.frameWidth / 2);

    // same as the x coordinate except that the screen coordinates
    // and the manim coordinates have an inverted y axis
    var sy = mapValue(pixelY, camera.pixelHeight, 0, -camera.frameHeight / 2,
        camera.frameHeight / 2);

    return Vector3(sx, sy, 0) + camera.frameCenter;
  }

  /// Converts the manim coordinates ([Vector3] [coords]) to the pixel coordinates
  /// The z component of [coords] is ignored.
  /// It returns a list of 2 double containing the x and y pixel coordinates
  List<double> getPixelPosition(Vector3 coords) {
    coords -= camera.frameCenter;

    // map pixelX which can be between 0 and pixelWidth
    // to between -frameWidth / 2 and frameWidth / 2
    // then the x coordinate of the frame center is added
    var px = mapValue(coords.x, -camera.frameWidth / 2, camera.frameWidth / 2,
        0, camera.pixelWidth);
    // same as the x coordinate except that the screen coordinates
    // and the manim coordinates have an inverted y axis
    var py = mapValue(coords.y, -camera.frameHeight / 2, camera.frameHeight / 2,
        camera.pixelHeight, 0);

    return [px, py];
  }

  void setup() {
    renderer.setup(this);
  }
}
