import 'package:manim_web/src/util/events/event.dart';
import 'package:manim_web/src/util/events/event_listener.dart';
import 'package:manim_web/src/util/events/key_events.dart';
import 'package:manim_web/src/util/events/mouse_events.dart';

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

  void _dispatchOnListenersList<IEvent extends Event>(
    IEvent event,
    List<EventListener<IEvent>> eventListeners,
  ) {
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
        _dispatchOnListenersList(mouseMovedEvent, listeners);
        break;

      case EventType.mousePressedEvent:
        var mousePressedEvent = event as MousePressedEvent;
        var listeners = eventListeners[EventType.mousePressedEvent]!;
        _dispatchOnListenersList(mousePressedEvent, listeners);
        break;

      case EventType.mouseReleasedEvent:
        var mouseReleasedEvent = event as MouseReleasedEvent;
        var listeners = eventListeners[EventType.mouseReleasedEvent]!;
        _dispatchOnListenersList(mouseReleasedEvent, listeners);
        break;

      case EventType.mouseDraggedEvent:
        var mouseDraggedEvent = event as MouseDraggedEvent;
        var listeners = eventListeners[EventType.mouseDraggedEvent]!;
        _dispatchOnListenersList(mouseDraggedEvent, listeners);
        break;

      case EventType.keyPressedEvent:
        var keyPressedEvent = event as KeyPressedEvent;
        var listeners = eventListeners[EventType.keyPressedEvent]!;
        _dispatchOnListenersList(keyPressedEvent, listeners);
        break;

      case EventType.keyReleasedEvent:
        var keyReleasedEvent = event as KeyReleasedEvent;
        var listeners = eventListeners[EventType.keyReleasedEvent]!;
        _dispatchOnListenersList(keyReleasedEvent, listeners);
        break;
    }
  }
}
