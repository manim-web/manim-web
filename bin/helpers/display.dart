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

  bool get isWeb2D => type == DisplayType.WEB2D;
  bool get isWebGL => type == DisplayType.WEBGL;
  bool get isCairo => type == DisplayType.CAIRO;
  bool get isOpenGL => type == DisplayType.OPENGL;

  bool get isWeb => isWeb2D || isWebGL;
  bool get isDesktop => !isWeb;

  factory Display.fromArgs(ArgResults args, bool renderMode) {
    var gl = args.getFlag('gl');
    var html = args.getNullableOption('html') != null;

    if (!gl && html) {
      var id = args.getOption('canvas-container-id');
      return Display.web2D(id, renderMode);
    } else {
      throw 'not implemented yet';
    }
  }

  Display.web2D(String id, bool renderMode)
      : type = DisplayType.WEB2D,
        imports = 'import \'package:manim_web/manim_html.dart\';',
        creationCode = renderMode
            ? 'RecordedCanvas2DDisplay(document.getElementById(\'$id\')!)'
            : 'Canvas2DDisplay(document.getElementById(\'$id\')!)';
}
