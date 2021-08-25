import 'package:manim_web/src/util/events/event.dart';

abstract class KeyEvent extends Event {
  String key;

  KeyEvent({required EventType type, required String name, required this.key})
      : super(type: type, name: name);

  @override
  String toString() => '$name $key';

  // A simple way to sort between characters and non characters
  // is to look at the number of characters of the key
  // if it's 1, it's a character code
  // otherwise, it isn't
  bool get isCharacter => key.length == 1;
}

class KeyPressedEvent extends KeyEvent {
  KeyPressedEvent({required String keyPressed})
      : super(
            type: EventType.keyPressedEvent,
            name: 'KeyPressedEvent',
            key: keyPressed);
}

class KeyReleasedEvent extends KeyEvent {
  KeyReleasedEvent({required String keyReleased})
      : super(
            type: EventType.keyReleasedEvent,
            name: 'KeyReleasedEvent',
            key: keyReleased);
}
