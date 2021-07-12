import 'package:manim_web/util/events/event.dart';
import 'package:manim_web/util/vector.dart';

abstract class MouseEvent extends Event {
  Vector3 mousePos; // used as a vector 2

  MouseEvent(
      {required this.mousePos, required EventType type, required String name})
      : super(type: type, name: name);
}

class MouseMovedEvent extends MouseEvent {
  Vector3 deltaPos; // used as a vector 2

  MouseMovedEvent({required Vector3 mousePos, required this.deltaPos})
      : super(
            type: EventType.mouseMovedEvent,
            name: 'MouseMovedEvent',
            mousePos: mousePos);
}

class MousePressedEvent extends MouseEvent {
  MouseButton button;

  MousePressedEvent({required this.button, required Vector3 mousePos})
      : super(
            type: EventType.mousePressedEvent,
            name: 'MousePressedEvent',
            mousePos: mousePos);
}

class MouseReleasedEvent extends MouseEvent {
  MouseButton button;

  MouseReleasedEvent({required this.button, required Vector3 mousePos})
      : super(
            type: EventType.mouseReleasedEvent,
            name: 'MouseReleasedEvent',
            mousePos: mousePos);
}

class MouseDraggedEvent extends MouseEvent {
  Vector3 deltaPos; // used as a vector 2
  MouseButton button;

  MouseDraggedEvent(
      {required this.button, required Vector3 mousePos, required this.deltaPos})
      : super(
            type: EventType.mouseDraggedEvent,
            name: 'MouseDraggedEvent',
            mousePos: mousePos);
}

class MouseButton {
  int buttonID;
  late String buttonName;

  MouseButton(this.buttonID) {
    switch (buttonID) {
      case 0:
        buttonName = 'LMB'; // Left Mouse Button
        break;
      case 1:
        buttonName = 'MMB'; // Middle Mouse Button
        break;
      case 2:
        buttonName = 'RMB'; // Right Mouse Button
        break;
      default:
        buttonName = 'Unknown button';
        break;
    }
  }
}
