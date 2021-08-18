import 'package:args/args.dart';
import 'console.dart';

extension DisplayArgParser on ArgParser {
  void addDisplayOptions() {
    addFlag(
      'gl',
      help: 'Use WebGL / OpenGL (depending on the target)',
      defaultsTo: false,
    );
    addOption(
      'html',
      abbr: 'w',
      aliases: ['web'],
      help: 'HTML file used to compile the animation. '
          'If not provided, the scene will use the corresponding non-web '
          'renderer (Cairo / OpenGL)',
    );
    addOption(
      'canvas-container-id',
      aliases: ['canvas-container', 'container-id'],
      abbr: 'c',
      defaultsTo: 'canvas-container',
      help: 'ID of the parent element of the canvas',
    );
  }
}

enum DisplayType { OPENGL, WEBGL, WEB2D, CAIRO }

class Display {
  DisplayType type;
  String creationCode; // code used to create the display
  String imports;

  Display({
    required this.type,
    required this.creationCode,
    required this.imports,
  });

  bool get isWeb2D => type == DisplayType.WEB2D;
  bool get isWebGL => type == DisplayType.WEBGL;
  bool get isCairo => type == DisplayType.CAIRO;
  bool get isOpenGL => type == DisplayType.OPENGL;

  bool get isWeb => isWeb2D || isWebGL;
  bool get isDesktop => !isWeb;

  factory Display.fromArgs(ArgResults args) {
    var gl = args.getFlag('use-gl');
    var html = args.getNullableOption('html') != null;

    if (!gl && html) {
      var id = args.getOption('canvas');
      return Display(
        type: DisplayType.WEB2D,
        imports: '''
          import 'dart:html';
          import 'package:manim_web/display/canvas_2d_display.dart';
        ''',
        creationCode: 'Canvas2DDisplay(document.getElementById(\'$id\')!)',
      );
    } else {
      throw 'not implemented yet';
    }
  }
}
