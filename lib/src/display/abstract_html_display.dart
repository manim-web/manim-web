import 'dart:async';
import 'dart:html';

import 'package:manim_web/src/constants.dart';
import 'package:manim_web/src/display/abstract_display.dart';
import 'package:manim_web/src/util/events/key_events.dart';
import 'package:manim_web/src/util/events/mouse_events.dart';
import 'package:manim_web/src/util/math_functions.dart';
import 'package:manim_web/src/util/vector.dart';

/// Abstract class to display in the html
abstract class AbstractHTMLDisplay extends AbstractDisplay {
  /// The [CanvasElement], an html canvas;
  CanvasElement canvas;
  Element container;

  /// Create the [canvas] in the [container]
  AbstractHTMLDisplay({required this.container})
      : canvas = document.createElement('canvas') as CanvasElement {
    container.append(canvas);
  }

  double previousTimeStep = 0;

  @override
  Future<double> nextFrame() async {
    var nextTimeStep = await window.animationFrame;

    if (previousTimeStep == 0) {
      previousTimeStep = nextTimeStep.toDouble();
    }

    var dt = nextTimeStep - previousTimeStep;
    previousTimeStep += dt;
    return (dt / 1000) * 2; // in seconds
  }

  /// Sets the width and the height of the [canvas]
  @override
  void setDisplaySize(int width, int height) {
    canvas.width = width;
    canvas.height = height;
  }

  /// Get the position of the point [pt] in the
  /// [canvas] instead of the whole html document.
  ///
  /// Returns a [Vector3] conaining the coordinates
  /// x and y of the corresponding point.
  Vector3 getMouseScreenPosition(Point pt) {
    var bb = canvas.getBoundingClientRect(); // canvas bounding box

    var x = mapValue(pt.x, bb.left, bb.right, 0, camera.pixelWidth);
    var y = mapValue(pt.y, bb.top, bb.bottom, 0, camera.pixelHeight);

    return Vector3(x, y, 0);
  }

  List<StreamSubscription> eventListeners = [];

  @override
  void bindEventListeners() {
    eventListeners.addAll([
      canvas.onMouseMove.listen((event) {
        prevMousePosition = mousePosition.copy();

        var mouseCoords = getMouseScreenPosition(event.page);
        mousePosition = getCoordinates(mouseCoords.x, mouseCoords.y);

        createMouseMovedEvent();

        if (isDragging) {
          dragCurrentPosition = mousePosition;
          createMouseDraggedEvent();
        }
      }),

      canvas.onMouseDown.listen((event) {
        prevMousePosition = mousePosition.copy();

        var mouseCoords = getMouseScreenPosition(event.page);
        mousePosition = getCoordinates(mouseCoords.x, mouseCoords.y);

        mouseButton = MouseButton(event.button);

        createMousePressedEvent();

        isDragging = true;
        dragStartPosition = mousePosition.copy();
        dragCurrentPosition = mousePosition.copy();
      }),

      canvas.onMouseUp.listen((event) {
        prevMousePosition = mousePosition.copy();

        var mouseCoords = getMouseScreenPosition(event.page);
        mousePosition = getCoordinates(mouseCoords.x, mouseCoords.y);

        mouseButton = MouseButton(event.button);

        createMouseReleasedEvent();
        isDragging = false;
      }),

      // touchscreen

      canvas.onTouchMove.listen((event) {
        event.preventDefault();
        prevMousePosition = mousePosition.copy();

        if (event.touches == null || event.touches!.isEmpty) {
          return;
        }

        var touch = event.touches!.first;

        var mouseCoords = getMouseScreenPosition(touch.page);
        mousePosition = getCoordinates(mouseCoords.x, mouseCoords.y);

        createMouseMovedEvent();

        if (isDragging) {
          dragCurrentPosition = mousePosition;
          createMouseDraggedEvent();
        }
      }),

      canvas.onTouchStart.listen((event) {
        event.preventDefault();
        prevMousePosition = mousePosition.copy();

        if (event.touches == null || event.touches!.isEmpty) {
          return;
        }

        var touch = event.touches!.first;

        var mouseCoords = getMouseScreenPosition(touch.page);
        mousePosition = getCoordinates(mouseCoords.x, mouseCoords.y);

        mouseButton = MouseButton(-1);

        var rx = (touch.radiusX / camera.pixelWidth) * camera.frameWidth;
        var ry = (touch.radiusY / camera.pixelHeight) * camera.frameHeight;
        var radius = Vector3(rx, ry, 0);

        createMousePressedEvent(radius);

        isDragging = true;
        dragStartPosition = mousePosition.copy();
        dragCurrentPosition = mousePosition.copy();
      }),

      canvas.onTouchEnd.listen((event) {
        event.preventDefault();
        prevMousePosition = mousePosition.copy();

        mouseButton = MouseButton(-1);

        createMouseReleasedEvent();
        isDragging = false;
      }),
    ]);
  }

  @override
  void unbindEventListeners() {
    for (var stream in eventListeners) {
      stream.cancel();
    }
  }

  /// Creates a [MouseDraggedEvent]
  ///
  /// * when mouse pressed start dragging
  ///   [dragStartPosition] is set to the cursor positon,
  ///   [isDragging] is set to true and [dragButton] is set
  ///   the current mouse button
  ///
  /// * when mouse released stop dragging
  ///   [isDragging] is set to false
  ///
  /// * when mouse moved
  ///   always set [dragCurrentPosition] to the current
  ///   mouse position and only if [isDragging] is
  ///   set to true, create and dispatch the
  ///   event to [onEvent]
  void createMouseDraggedEvent() {
    var mousePos = dragCurrentPosition;
    var deltaPos = dragStartPosition - dragCurrentPosition;
    var button = mouseButton;

    onEvent(
      MouseDraggedEvent(
        button: button,
        mousePos: mousePos,
        deltaPos: deltaPos,
      ),
    );
  }

  /// As described in [createMouseDraggedEvent],
  /// [isDragging] is set to true when the canvas
  /// receive the drag event
  bool isDragging = false;

  /// As described in [createMouseDraggedEvent],
  /// [dragStartPositon] is the position of the
  /// cursor when the drag started
  Vector3 dragStartPosition = ORIGIN;

  /// As described in [createMouseDraggedEvent],
  /// [dragCurrentPosition] is the position of the
  /// cursor at the time of the event
  Vector3 dragCurrentPosition = ORIGIN;

  /// [mouseButton] is the button who triggered the
  /// mouse event.
  MouseButton mouseButton = MouseButton(0);

  // TODO add documentation
  Vector3 mousePosition = ORIGIN;
  Vector3 prevMousePosition = ORIGIN;

  void createMouseMovedEvent() {
    var deltaPosition = mousePosition - prevMousePosition;
    onEvent(MouseMovedEvent(deltaPos: deltaPosition, mousePos: mousePosition));
  }

  void createMousePressedEvent([Vector3 radius = ORIGIN]) {
    onEvent(MousePressedEvent(
      mousePos: mousePosition,
      button: mouseButton,
      radius: radius,
    ));
  }

  void createMouseReleasedEvent() {
    onEvent(MouseReleasedEvent(mousePos: mousePosition, button: mouseButton));
  }

  // TODO Use key pressed and key released events
  void createKeyPressedEvent(String keyPressed) {
    onEvent(KeyPressedEvent(keyPressed: keyPressed));
  }

  void createKeyReleasedEvent(String keyReleased) {
    onEvent(KeyReleasedEvent(keyReleased: keyReleased));
  }
}
