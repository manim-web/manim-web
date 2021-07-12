import 'package:manim_web/util/events/event.dart';
import 'package:manim_web/util/events/event_dispatcher.dart';
import 'package:manim_web/util/events/event_listener.dart';
import 'package:manim_web/util/events/mouse_events.dart';
import 'package:manim_web/util/vector.dart';
import 'package:manim_web/mobject/types/mobject.dart';

//* Base class to handle event listening
abstract class InteractiveMobject extends Mobject {
  Mobject mobject;

  InteractiveMobject({required this.mobject}) {
    add([mobject]);
    bindEventListeners();
  }

  EventListener<IEvent> addEventListener<IEvent extends Event>(
      EventType eventType, EventCallBack<IEvent> callBack) {
    var listener = EventListener(eventType, callBack);
    EventDispatcher.eventDispatcher.addListener(listener);
    return listener;
  }

  void removeEventListener(EventListener listener) =>
      EventDispatcher.eventDispatcher.removeListener(listener);

  void bindEventListeners();
  void unbindEventListeners();

  InteractiveMobject.copyFrom(InteractiveMobject mob)
      : mobject = mob.mobject.copy(),
        super.copyFrom(mob);
}

//* Make a mobject draggable
class DraggableMobject extends InteractiveMobject {
  late EventListener<MouseDraggedEvent> draggedListener;
  late EventListener<MousePressedEvent> pressedListener;
  late EventListener<MouseReleasedEvent> releasedListener;
  bool isDragged = false;

  DraggableMobject({
    required Mobject mob,
  }) : super(mobject: mob);

  //* dragging is done when the cursor is inside the bounding box
  // TODO use bezier curves to determine if the cursor is inside the mobject

  @override
  void bindEventListeners() {
    draggedListener = addEventListener(EventType.mouseDraggedEvent, (event) {
      if (isDragged) {
        mobject.moveToPoint(event.mousePos);

        onDrag(event.mousePos);

        return true; // handle the event
      }

      return false;
    });

    pressedListener = addEventListener(EventType.mousePressedEvent, (event) {
      var inside = mobject.isInside(event.mousePos);
      if (inside) {
        isDragged = true;
        mobject.moveToPoint(event.mousePos);

        return true; // handle the event
      }

      return false;
    });

    releasedListener = addEventListener(EventType.mouseReleasedEvent, (event) {
      isDragged = false;
      return false;
    });
  }

  @override
  void unbindEventListeners() {
    removeEventListener(pressedListener);
    removeEventListener(draggedListener);
    removeEventListener(releasedListener);
  }

  void onDrag(Vector3 mousePos) {} // can be overriden in subclasses

  @override
  DraggableMobject copy() => DraggableMobject.copyFrom(this);

  DraggableMobject.copyFrom(DraggableMobject mob)
      : draggedListener = mob.draggedListener,
        pressedListener = mob.pressedListener,
        releasedListener = mob.releasedListener,
        isDragged = mob.isDragged,
        super.copyFrom(mob);
}

//* Make a mobject follow the mouse
class FollowMouseMobject extends InteractiveMobject {
  late EventListener<MouseMovedEvent> movedListener;

  FollowMouseMobject({
    required Mobject mob,
  }) : super(mobject: mob);

  @override
  void bindEventListeners() {
    movedListener = addEventListener(EventType.mouseMovedEvent, (event) {
      mobject.moveToPoint(event.mousePos);

      return true;
    });
  }

  @override
  void unbindEventListeners() {
    removeEventListener(movedListener);
  }

  @override
  FollowMouseMobject copy() => FollowMouseMobject.copyFrom(this);

  FollowMouseMobject.copyFrom(FollowMouseMobject mob)
      : movedListener = mob.movedListener,
        super.copyFrom(mob);
}

class Button extends InteractiveMobject {
  late EventListener<MouseReleasedEvent> releasedListener;

  late void Function() onClick;

  Button({required Mobject mob, void Function()? onClick})
      : super(mobject: mob) {
    this.onClick = onClick ?? () => {};
  }

  @override
  void bindEventListeners() {
    releasedListener = addEventListener(EventType.mouseReleasedEvent, (event) {
      if (mobject.isInside(event.mousePos)) {
        onClick();
        return true;
      }

      return false;
    });
  }

  @override
  void unbindEventListeners() {
    removeEventListener(releasedListener);
  }

  @override
  Button copy() => Button.copyFrom(this);

  Button.copyFrom(Button mob)
      : onClick = mob.onClick,
        releasedListener = mob.releasedListener,
        super.copyFrom(mob);
}
