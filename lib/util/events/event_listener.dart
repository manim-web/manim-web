part of util.events;

typedef EventCallBack<IEvent extends Event> = bool Function(IEvent);

class EventListener<IEvent extends Event> {
  final EventCallBack<IEvent> callBack;
  final EventType eventType;
  const EventListener(this.eventType, this.callBack);

  bool handleEvent(IEvent event) => callBack(event);

  EventType getType() => eventType;
}
