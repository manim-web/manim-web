import 'dart:math';

import 'package:colorize/colorize.dart';

const HEADER_WIDTH = 130;
const HEADER_BUFFER = 10;
const BORDER_BUFFER = 3;
const BORDER_WIDTH = 1;
const MAX_BORDERED_TEXT_LENGTH =
    HEADER_WIDTH - 2 * BORDER_BUFFER - 2 * BORDER_WIDTH;
const MAX_BORDERED_TEXT_LENGTH_WITHOUT_BUFFER = HEADER_WIDTH - 2 * BORDER_WIDTH;

void printHeader(String header) {
  var buffer = HEADER_BUFFER;
  var width = HEADER_WIDTH - 2 * BORDER_WIDTH - 2 * BORDER_BUFFER;

  width = max(width, header.length + 2 + buffer * 2).floor();

  buffer = (buffer ~/ 2) * 2;

  var borderWidth = (width - header.length - buffer * 2) / 2;

  var spaces = List.filled(width, ' ').join();
  var equals = List.filled(width, '=').join();
  var borderEquals1 = List.filled(borderWidth.floor(), '=').join();
  var borderEquals2 = List.filled(borderWidth.ceil(), '=').join();
  var bufferSpaces = List.filled(buffer, ' ').join();

  print(spaces);
  printBorderStart(withSideBorder: false);
  printBordered(' ', firstCharacter: ' ');
  printBordered(equals, firstCharacter: ' ');
  printBordered('$borderEquals1$bufferSpaces$header$bufferSpaces$borderEquals2',
      firstCharacter: ' ');
  printBordered(equals, firstCharacter: ' ');
  printBorderStart(withSideBorder: true);
  printBordered(spaces, firstCharacter: ' ');
  printBordered(' ', firstCharacter: ' ');
}

void printBordered(String text,
    {bool withBuffer = true, String firstCharacter = '*', bool? error}) {
  var maxTextLength = withBuffer
      ? MAX_BORDERED_TEXT_LENGTH
      : MAX_BORDERED_TEXT_LENGTH_WITHOUT_BUFFER;

  var width = HEADER_WIDTH;

  if (text.length > maxTextLength) {
    printBordered(text.substring(0, maxTextLength),
        withBuffer: withBuffer, firstCharacter: firstCharacter);
    printBordered(text.substring(maxTextLength, text.length),
        withBuffer: withBuffer, firstCharacter: ' ');
    return;
  }

  var fillSpacesCount = withBuffer
      ? width -
          (text.length +
              BORDER_BUFFER * 2 +
              2 * BORDER_WIDTH -
              firstCharacter.length)
      : width - (text.length + 2 * BORDER_WIDTH);

  var fillSpaces = List.filled(fillSpacesCount, ' ').join();
  var startBufferWidth = (BORDER_BUFFER - firstCharacter.length) / 2;
  var bufferSpaces1 =
      withBuffer ? List.filled(startBufferWidth.floor(), ' ').join() : '';
  var bufferSpaces2 =
      withBuffer ? List.filled(startBufferWidth.floor(), ' ').join() : '';
  var bufferSpaces3 = withBuffer ? List.filled(BORDER_BUFFER, ' ').join() : '';
  var border = List.filled(BORDER_WIDTH, '|').join();

  var _firstCharacter = error == null
      ? firstCharacter.colored()
      : error
          ? firstCharacter.colored().lightRed()
          : firstCharacter.colored().lightGreen();

  print(
      '$border$bufferSpaces1$_firstCharacter$bufferSpaces2$text$fillSpaces$bufferSpaces3$border');
}

void printBorderEnd() {
  var width = MAX_BORDERED_TEXT_LENGTH_WITHOUT_BUFFER;
  printBordered('', firstCharacter: ' ');
  printBordered(List.filled(width, '_').join(),
      withBuffer: false, firstCharacter: '_');
}

void printBorderStart({required bool withSideBorder}) {
  var width = MAX_BORDERED_TEXT_LENGTH_WITHOUT_BUFFER;
  if (withSideBorder) {
    printBordered(List.filled(width, '_').join(),
        withBuffer: false, firstCharacter: '_');
  } else {
    var borderTop = List.filled(width + 1, '_').join();
    var corner = List.filled(BORDER_WIDTH, ' ').join();
    print('$corner$borderTop$corner');
  }
}

extension ColoredString on String {
  Colorize colored() => Colorize(this);
}
