enum EventType {
  mouseMovedEvent,
  mousePressedEvent,
  mouseReleasedEvent,
  mouseDraggedEvent,
  keyPressedEvent,
  keyReleasedEvent,
}

abstract class Event {
  EventType type;
  String name;

  Event({
    required this.type,
    required this.name,
  });
}
