import 'dart:async';
import 'dart:math';

import 'package:manim_web/animation/animation.dart';
import 'package:manim_web/animation/composition.dart';
import 'package:manim_web/camera/camera.dart';
import 'package:manim_web/display/abstract_display.dart';
import 'package:manim_web/mobject/types/mobject.dart';
import 'package:manim_web/renderer/abstract_renderer.dart';
import 'package:manim_web/util/array.dart';
import 'package:manim_web/util/events/event.dart';
import 'package:manim_web/util/events/event_dispatcher.dart';
import 'package:manim_web/util/events/event_listener.dart';
import 'package:manim_web/util/events/mouse_events.dart';

abstract class Scene {
  double time = 0;
  bool alwaysUpdateMobjects = false;
  int randomSeed = 0;

  late List<Mobject> mobjects;
  late Random random;
  late Camera camera;
  late AbstractRenderer renderer;
  late AbstractDisplay display;

  Scene() {
    display = createDisplay();
    renderer = display.renderer;
    camera = createCamera();
    random = Random(randomSeed);
    mobjects = [];
  }

  Future run() async {
    display.bindEventListeners();

    setup();
    try {
      await construct();
    } on EndSceneEarlyException {
      print('An EndSceneEarlyException has occured');
    }
    render();
    tearDown();

    display.unbindEventListeners();
  }

  AbstractDisplay createDisplay(); //* To be implemented in subclasses

  //* Can be overwritten in subclasses
  Camera createCamera() {
    return Camera(display: display);
  }

  void setup() {}
  Future construct(); //* To be implemented in subclasses
  void tearDown() {}

  void resetCamera() => camera.reset();
  void render() => camera.render(mobjects);

  void updateFrame(double dt) {
    resetCamera();
    render();
    time += dt;
  }

  void updateMobjects(double dt) {
    for (var mob in mobjects) {
      mob.update(dt: dt);
    }
  }

  bool shouldUpdateMobjects() =>
      alwaysUpdateMobjects ||
      [for (var mob in getMobjectsFamilies()) mob.hasUpdaters()].any((e) => e);

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
      camera.extractMobjectFamilyMembers(mobjects);

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

  void restructureMobjects(
      {List<Mobject> toRemove = const [], bool extractFamilies = true}) {
    var toRemove_ = [
      ...toRemove,
      if (extractFamilies) ...camera.extractMobjectFamilyMembers(toRemove)
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

  List<Mobject> getMovingMobjects(List<Animation> animations) {
    var animationMobjects = animations.map((anim) => anim.mobject).toList();
    var mobjects = getMobjectsFamilies();

    for (var iMob in enumerate(mobjects)) {
      var mob = iMob.item2;
      var i = iMob.item1;

      if (animationMobjects.contains(mob) ||
          mob.getFamilyUpdaters().isNotEmpty) {
        return mobjects.skip(i).toList();
      }
    }

    return [];
  }

  double getRunTime(List<Animation> animations) =>
      animations.map((anim) => anim.runTime).reduce(max);

  void beginAnimation(Animation animation) {
    var currentMobjects = getMobjectsFamilies();

    animation.begin();
    var mob = animation.mobject;
    if (!currentMobjects.contains(mob)) {
      add([mob]);
      currentMobjects.addAll(mob.getFamily());
    }
  }

  Future progressThroughAnimation(Animation animation) async {
    //* NOTE:
    //* In Manim, all non-moving mobjects are rendered before the animation
    //* such that they don't have to be rerendered every frame of animation
    //* However, here, non-moving mobjects are rerendered every frame
    // TODO: Stop rerendering non moving mobjects (maybe ?)

    var t = 0.0;

    while (t < animation.runTime) {
      var dt = await renderer.nextFrame();
      t += dt;

      var alpha = t / animation.runTime;
      animation
        ..updateMobjects(dt)
        ..interpolate(alpha);

      updateMobjects(dt);
      updateFrame(dt);
    }
  }

  void finishAnimation(Animation animation) {
    animation.finish();
    animation.cleanUpFromScene(this);
    updateMobjects(0);
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
      var dt = await renderer.nextFrame();
      t += dt;

      updateMobjects(dt);
      updateFrame(dt);
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
        var dt = await renderer.nextFrame();
        updateMobjects(dt);
        updateFrame(dt);
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
