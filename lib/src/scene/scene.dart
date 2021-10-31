import 'dart:async';
import 'dart:math';

import 'package:manim_web/src/animation/animation.dart';
import 'package:manim_web/src/animation/composition.dart';
import 'package:manim_web/src/camera/camera.dart';
import 'package:manim_web/src/display/abstract_display.dart';
import 'package:manim_web/src/mobject/types/mobject.dart';
import 'package:manim_web/src/renderer/abstract_renderer.dart';
import 'package:manim_web/src/util/aabb.dart';
import 'package:manim_web/src/util/array.dart';
import 'package:manim_web/src/util/events/event.dart';
import 'package:manim_web/src/util/events/event_dispatcher.dart';
import 'package:manim_web/src/util/events/event_listener.dart';
import 'package:manim_web/src/util/events/mouse_events.dart';

abstract class Scene {
  double time = 0;
  int randomSeed = 0;

  List<Mobject> mobjects = [];
  late Random random;
  late Camera camera;
  late AbstractRenderer renderer;
  late AbstractDisplay display;

  Scene() {
    camera = createCamera();
    random = Random(randomSeed);
    mobjects = [];
  }

  void bindDisplay(AbstractDisplay _display) {
    display = _display;
    renderer = display.renderer;
    display.bindCamera(camera);
    camera.bindDisplay(display);
  }

  Future run() async {
    display.bindEventListeners();

    await setup();

    try {
      await construct();
    } on EndSceneEarlyException {
      print('An EndSceneEarlyException has occured');
    }
    renderSame();
    await tearDown();

    await display.tearDown();
    display.unbindEventListeners();
  }

  //* Can be overwritten in subclasses
  Camera createCamera() {
    return Camera();
  }

  FutureOr<void> preload() {}
  FutureOr<void> setup() {}
  FutureOr<void> construct(); //* To be implemented in subclasses
  FutureOr<void> tearDown() {}

  void resetCamera(AABB aabb) => camera.reset(aabb);

  // render the same frame as last time
  void renderSame() => render([], AABB.empty());
  void renderFull() => render(mobjects, camera.getFullScreenAABB());
  void render(
    List<Mobject> mobjects,
    AABB aabb,
  ) =>
      camera.render(mobjects, aabb);

  void updateFrame(double dt, List<Mobject> mobjects) {
    var group = Group(mobjects);
    var aabb = group.getAABB();

    if (time == 0) {
      mobjects = this.mobjects;
      aabb = camera.getFullScreenAABB();
    }

    print(mobjects);

    if (aabb.isEmpty) {
      time += dt;
      return;
    }

    var mobjectsToRender = getIntersectingMobjects(aabb);

    resetCamera(aabb);
    render(mobjectsToRender, aabb);

    time += dt;
  }

  List<Mobject> getIntersectingMobjects(AABB aabb) {
    var mobjectsToRender = <Mobject>[];

    for (var mobject in mobjects) {
      var _aabb = mobject.getAABB();

      if (aabb.intersectsAABB(_aabb)) {
        mobjectsToRender.add(mobject);
      }
    }

    return mobjectsToRender;
  }

  void updateMobjects(double dt, List<Mobject> mobjects) {
    for (var mob in mobjects) {
      mob.update(dt: dt);
    }
  }

  double getTime() => time;
  void incrementTime(double dt) => time += dt;

  List<Mobject> getTopLevelMobjects() {
    var mobjects = getMobjects();
    var families = [for (var m in mobjects) m.getFamily()];

    bool isTopLevel(Mobject mob) {
      var numFamilies = [
        for (var family in families)
          if (family.contains(mob)) 1 else 0
      ].reduce((a, b) => a + b);

      return numFamilies == 1;
    }

    return [
      for (var mobject in mobjects)
        if (isTopLevel(mobject)) mobject
    ];
  }

  List<Mobject> getMobjectsFamilies() =>
      withoutRedundancies([for (var mob in mobjects) ...mob.getFamily()]);

  void addToBack(List<Mobject> mobjects) {
    restructureMobjects(toRemove: mobjects);
    this.mobjects.addAll(mobjects);
  }

  void add(List<Mobject> mobjects) => addToFront(mobjects);

  void addToFront(List<Mobject> mobjects) {
    restructureMobjects(toRemove: mobjects);
    this.mobjects.insertAll(0, mobjects);
  }

  void remove(List<Mobject> mobjects) =>
      restructureMobjects(toRemove: mobjects, extractFamilies: true);

  void restructureMobjects({
    List<Mobject> toRemove = const [],
    bool extractFamilies = true,
  }) {
    var toRemove_ = [
      ...toRemove,
      if (extractFamilies)
        for (var mob in toRemove) ...mob.getFamily()
    ];

    mobjects = getRestructuredMobjectList(mobjects, toRemove_);
  }

  List<Mobject> getRestructuredMobjectList(
      List<Mobject> mobjects, List<Mobject> toRemove) {
    var newMobjects = <Mobject>[];

    void addSafeMobjectsFromList(
        List<Mobject> mobjects, Set<Mobject> setToRemove) {
      for (var mob in mobjects) {
        if (setToRemove.contains(mob)) {
          continue;
        }

        var intersect = setToRemove.intersection(mob.getFamily().toSet());
        if (intersect.isNotEmpty) {
          addSafeMobjectsFromList(mob.submobjects, intersect);
        } else {
          newMobjects.add(mob);
        }
      }
    }

    addSafeMobjectsFromList(mobjects, toRemove.toSet());
    return newMobjects;
  }

  void bringToFront(List<Mobject> mobs) => addToFront(mobs);
  void bringToBack(List<Mobject> mobs) => addToBack(mobs);

  void clear() => mobjects.clear();
  List<Mobject> getMobjects() => [...mobjects];
  List<Mobject> getMobjectCopies() =>
      mobjects.map((mob) => mob.copy()).toList();

  List<Mobject> getMovingMobjects([Animation? animation]) => [
        for (var mob in getMobjectsFamilies())
          if (mob == animation?.mobject || mob.hasUpdaters()) mob
      ];

  void beginAnimation(Animation animation) {
    var currentMobjects = getMobjectsFamilies();

    animation.begin();
    var mob = animation.mobject;
    if (!currentMobjects.contains(mob)) {
      add([mob]);
    }
  }

  Future progressThroughAnimation(Animation animation) async {
    var t = 0.0;

    while (t < animation.runTime) {
      var dt = await display.nextFrame();
      t += dt;

      var alpha = t / animation.runTime;
      animation
        ..updateMobjects(dt)
        ..interpolate(alpha);

      var mobjects = getMovingMobjects(animation);

      updateMobjects(dt, mobjects);
      updateFrame(dt, mobjects);
    }
  }

  void finishAnimation(Animation animation) {
    animation.finish();
    animation.cleanUpFromScene(this);
    updateMobjects(0, getMovingMobjects(animation));
  }

  Future play(Animation animation) async {
    beginAnimation(animation);
    await progressThroughAnimation(animation);
    finishAnimation(animation);
  }

  Future playMany(List<Animation> animations) =>
      play(AnimationGroup(animations));

  Future wait([double duration = 1.0]) async {
    var t = 0.0;

    while (t < duration) {
      var dt = await display.nextFrame();
      t += dt;

      updateMobjects(dt, []);
      updateFrame(dt, getMovingMobjects());
    }
  }

  Future continueRendering() async {
    while (true) {
      await wait();
    }
  }

  void addEventListener(EventListener listener) =>
      EventDispatcher.eventDispatcher.addListener(listener);

  void removeEventListener(EventListener listener) =>
      EventDispatcher.eventDispatcher.addListener(listener);

  // TODO refactor this
  Future<IEvent> waitForEvent<IEvent extends Event>(EventType eventType,
      {bool markAsHandled = false, bool continueRendering = true}) async {
    if (continueRendering) {
      var completed = false;
      var event;

      var listener = EventListener<IEvent>(eventType, (_event) {
        if (!completed) {
          event = _event;
          completed = true;
        }

        return markAsHandled;
      });

      addEventListener(listener);

      while (!completed) {
        var dt = await display.nextFrame();
        updateMobjects(dt, []);
        updateFrame(dt, getMovingMobjects());
      }

      removeEventListener(listener);

      return event;
    } else {
      var completer = Completer<IEvent>();

      var listener = EventListener<IEvent>(eventType, (event) {
        if (!completer.isCompleted) {
          completer.complete(event);
        }

        return markAsHandled;
      });

      addEventListener(listener);

      var event = await completer.future;

      removeEventListener(listener);

      return event;
    }
  }

  Future<MousePressedEvent> waitForClick(
          {bool markAsHandled = false, bool continueRendering = true}) =>
      waitForEvent(EventType.mousePressedEvent,
          markAsHandled: markAsHandled, continueRendering: continueRendering);
}

class EndSceneEarlyException implements Exception {}

void runScene(Scene scene) {
  scene.run();
}
