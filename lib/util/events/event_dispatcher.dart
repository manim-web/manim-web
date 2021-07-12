import 'package:manim_web/util/events/event.dart';
import 'package:manim_web/util/events/event_listener.dart';
import 'package:manim_web/util/events/key_events.dart';
import 'package:manim_web/util/events/mouse_events.dart';

class EventDispatcher {
  static EventDispatcher eventDispatcher = EventDispatcher();

  late Map<EventType, List<EventListener>> eventListeners;

  EventDispatcher() {
    eventListeners = {
      for (var eventType in EventType.values) eventType: [],
    };
  }

  void addListener(EventListener listener) {
    var type = listener.getType();
    eventListeners[type]!.add(listener);
  }

  void removeListener(EventListener listener) {
    var type = listener.getType();
    eventListeners[type]!.remove(listener);
  }

  void _dispatchOnListnersList<IEvent extends Event>(
      IEvent event, List<EventListener<IEvent>> eventListeners) {
    var remainingListeners = [...eventListeners];

    var handled = false;

    while (!handled && remainingListeners.isNotEmpty) {
      var currentListener = remainingListeners.last;
      remainingListeners.remove(currentListener);

      handled = currentListener.handleEvent(event);
    }
  }

  void dispatch(Event event) {
    switch (event.type) {
      case EventType.mouseMovedEvent:
        var mouseMovedEvent = event as MouseMovedEvent;
        var listeners = eventListeners[EventType.mouseMovedEvent]!;
        _dispatchOnListnersList(mouseMovedEvent, listeners);
        break;

      case EventType.mousePressedEvent:
        var mousePressedEvent = event as MousePressedEvent;
        var listeners = eventListeners[EventType.mousePressedEvent]!;
        _dispatchOnListnersList(mousePressedEvent, listeners);
        break;

      case EventType.mouseReleasedEvent:
        var mouseReleasedEvent = event as MouseReleasedEvent;
        var listeners = eventListeners[EventType.mouseReleasedEvent]!;
        _dispatchOnListnersList(mouseReleasedEvent, listeners);
        break;

      case EventType.mouseDraggedEvent:
        var mouseDraggedEvent = event as MouseDraggedEvent;
        var listeners = eventListeners[EventType.mouseDraggedEvent]!;
        _dispatchOnListnersList(mouseDraggedEvent, listeners);
        break;

      case EventType.keyPressedEvent:
        var keyPressedEvent = event as KeyPressedEvent;
        var listeners = eventListeners[EventType.keyPressedEvent]!;
        _dispatchOnListnersList(keyPressedEvent, listeners);
        break;

      case EventType.keyReleasedEvent:
        var keyReleasedEvent = event as KeyReleasedEvent;
        var listeners = eventListeners[EventType.keyReleasedEvent]!;
        _dispatchOnListnersList(keyReleasedEvent, listeners);
        break;
    }
  }
}
