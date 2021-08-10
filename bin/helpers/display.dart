import 'package:args/args.dart';
import 'console.dart';

extension DisplayArgParser on ArgParser {
  void addDisplayOptions() {
    addFlag('use-gl', aliases: ['gl']);
    addOption('html', abbr: 'h');
    addOption(
      'canvas-container-id',
      aliases: ['canvas-container', 'container-id'],
      abbr: 'c',
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
      var id = args.getNullableOption('canvas') ?? 'canvas-container';
      return Display(
          type: DisplayType.WEB2D,
          imports: '''
          import 'dart:html';
          import 'package:manim_web/display/canvas_2d_display.dart';
        ''',
          creationCode: 'Canvas2DDisplay(document.getElementById(\'$id\')!)');
    } else {
      print(gl);
      print(html);
      throw 'not implemented yet';
    }
  }
}
