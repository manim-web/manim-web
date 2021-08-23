library display.html;

import 'dart:async';
import 'dart:html';

import 'package:manim_web/constants.dart';
import 'package:manim_web/display/abstract_display.dart';
import 'package:manim_web/renderer/abstract_renderer.dart';
import 'package:manim_web/renderer/canvas_2d_renderer.dart';
import 'package:manim_web/util/events/event.dart';
import 'package:manim_web/util/math_functions.dart';
import 'package:manim_web/util/vector.dart';

part 'canvas_2d_display.dart';

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
    return dt / 1000; // in seconds
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

  void createMousePressedEvent() {
    onEvent(MousePressedEvent(mousePos: mousePosition, button: mouseButton));
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
