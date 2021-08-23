library util.events;

import 'package:manim_web/util/vector.dart';

part 'event_dispatcher.dart';
part 'event_listener.dart';
part 'key_events.dart';
part 'mouse_events.dart';

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
