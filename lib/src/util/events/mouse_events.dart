import 'package:manim_web/src/util/events/event.dart';
import 'package:manim_web/src/util/vector.dart';

abstract class MouseEvent extends Event {
  Vector3 mousePos; // used as a vector 2

  MouseEvent(
      {required this.mousePos, required EventType type, required String name})
      : super(
          type: type,
          name: name,
        );
}

class MouseMovedEvent extends MouseEvent {
  Vector3 deltaPos; // used as a vector 2

  MouseMovedEvent({required Vector3 mousePos, required this.deltaPos})
      : super(
          type: EventType.mouseMovedEvent,
          name: 'MouseMovedEvent',
          mousePos: mousePos,
        );
}

class MousePressedEvent extends MouseEvent {
  MouseButton button;
  Vector3 radius;

  MousePressedEvent({
    required this.button,
    required Vector3 mousePos,
    required this.radius,
  }) : super(
          type: EventType.mousePressedEvent,
          name: 'MousePressedEvent',
          mousePos: mousePos,
        );
}

class MouseReleasedEvent extends MouseEvent {
  MouseButton button;

  MouseReleasedEvent({required this.button, required Vector3 mousePos})
      : super(
          type: EventType.mouseReleasedEvent,
          name: 'MouseReleasedEvent',
          mousePos: mousePos,
        );
}

class MouseDraggedEvent extends MouseEvent {
  Vector3 deltaPos; // used as a vector 2
  MouseButton button;

  MouseDraggedEvent(
      {required this.button, required Vector3 mousePos, required this.deltaPos})
      : super(
          type: EventType.mouseDraggedEvent,
          name: 'MouseDraggedEvent',
          mousePos: mousePos,
        );
}

class MouseButton {
  int buttonID;

  MouseButton(this.buttonID);

  String get buttonName {
    switch (buttonID) {
      case 0:
        return 'LMB'; // Left Mouse Button
      case 1:
        return 'MMB'; // Middle Mouse Button
      case 2:
        return 'RMB'; // Right Mouse Button
      case -1:
        return 'TS'; // Touch screen
      default:
        return 'Unknown button';
    }
  }
}
