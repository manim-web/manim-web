import 'dart:math';

import 'package:manim_web/src/util/color.dart';
import 'package:manim_web/src/util/vector.dart';

import 'package:manim_web/src/mobject/geometry.dart';

const PI = pi;
const TAU = 2 * PI;

const RADIANS = 1.0;
const DEGREES = TAU / 360;

const DEFAULT_PIXEL_WIDTH = 1280;
const DEFAULT_PIXEL_HEIGHT = 720;
const DEFAULT_FRAME_RATE = 25.0;

const FRAME_HEIGHT = 8.0;
const FRAME_WIDTH = FRAME_HEIGHT * DEFAULT_PIXEL_WIDTH / DEFAULT_PIXEL_HEIGHT;
const FRAME_X_RADIUS = FRAME_WIDTH / 2;
const FRAME_Y_RADIUS = FRAME_HEIGHT / 2;

const SMALL_BUFFER = 0.1;
const MED_SMALL_BUFFER = 0.25;
const MED_LARGE_BUFFER = 0.5;
const LARGE_BUFFER = 1.0;

const ORIGIN = Vector3(0, 0, 0);
const LEFT = Vector3(-1, 0, 0);
const RIGHT = Vector3(1, 0, 0);
const UP = Vector3(0, 1, 0);
const DOWN = Vector3(0, -1, 0);
const OUT = Vector3(0, 0, 1);
const IN = Vector3(0, 0, -1);

const UL = Vector3(-1, 1, 0);
const UR = Vector3(1, 1, 0);
const DL = Vector3(-1, -1, 0);
const DR = Vector3(1, -1, 0);

//* Colors
const WHITE = Color(r: 1, g: 1, b: 1, a: 1);
const BLACK = Color(r: 0, g: 0, b: 0, a: 1);
const TRANSPARENT = Color(r: 0, g: 0, b: 0, a: 0);

const DARK_BLUE = Color(r: 0.13725, g: 0.41961, b: 0.55686); //    #236B8E
const DARK_BROWN = Color(r: 0.5451, g: 0.27059, b: 0.07451); //    #8B4513
const LIGHT_BROWN = Color(r: 0.80392, g: 0.52157, b: 0.24706); //  #CD853F
const BLUE_E = Color(r: 0.1098, g: 0.45882, b: 0.54118); //        #1C758A
const BLUE_D = Color(r: 0.16078, g: 0.67059, b: 0.79216); //       #29ABCA
const BLUE_C = Color(r: 0.3451, g: 0.76863, b: 0.86667); //        #58C4DD
const BLUE_B = Color(r: 0.61176, g: 0.86275, b: 0.92157); //       #9CDCEB
const BLUE_A = Color(r: 0.78039, g: 0.91373, b: 0.9451); //        #C7E9F1
const TEAL_E = Color(r: 0.28627, g: 0.65882, b: 0.56078); //       #49A88F
const TEAL_D = Color(r: 0.33333, g: 0.75686, b: 0.6549); //        #55C1A7
const TEAL_C = Color(r: 0.36078, g: 0.81569, b: 0.70196); //       #5CD0B3
const TEAL_B = Color(r: 0.46275, g: 0.86667, b: 0.75294); //       #76DDC0
const TEAL_A = Color(r: 0.67451, g: 0.91765, b: 0.84314); //       #ACEAD7
const GREEN_E = Color(r: 0.41176, g: 0.61176, b: 0.32157); //      #699C52
const GREEN_D = Color(r: 0.46667, g: 0.6902, b: 0.36471); //       #77B05D
const GREEN_C = Color(r: 0.51373, g: 0.75686, b: 0.40392); //      #83C167
const GREEN_B = Color(r: 0.65098, g: 0.81176, b: 0.54902); //      #A6CF8C
const GREEN_A = Color(r: 0.78824, g: 0.88627, b: 0.68235); //      #C9E2AE
const YELLOW_E = Color(r: 0.9098, g: 0.75686, b: 0.1098); //       #E8C11C
const YELLOW_D = Color(r: 0.95686, g: 0.82745, b: 0.27059); //     #F4D345
const YELLOW_C = Color(r: 1.0, g: 1.0, b: 0.0); //                 #FFFF00
const YELLOW_B = Color(r: 1.0, g: 0.91765, b: 0.58039); //         #FFEA94
const YELLOW_A = Color(r: 1.0, g: 0.9451, b: 0.71373); //          #FFF1B6
const GOLD_E = Color(r: 0.78039, g: 0.55294, b: 0.27451); //       #C78D46
const GOLD_D = Color(r: 0.88235, g: 0.63137, b: 0.3451); //        #E1A158
const GOLD_C = Color(r: 0.94118, g: 0.67451, b: 0.37255); //       #F0AC5F
const GOLD_B = Color(r: 0.97647, g: 0.71765, b: 0.45882); //       #F9B775
const GOLD_A = Color(r: 0.96863, g: 0.78039, b: 0.59216); //       #F7C797
const RED_E = Color(r: 0.81176, g: 0.31373, b: 0.26667); //        #CF5044
const RED_D = Color(r: 0.90196, g: 0.35294, b: 0.29804); //        #E65A4C
const RED_C = Color(r: 0.98824, g: 0.38431, b: 0.33333); //        #FC6255
const RED_B = Color(r: 1.0, g: 0.50196, b: 0.50196); //            #FF8080
const RED_A = Color(r: 0.96863, g: 0.63137, b: 0.63922); //        #F7A1A3
const MAROON_E = Color(r: 0.58039, g: 0.25882, b: 0.3098); //      #94424F
const MAROON_D = Color(r: 0.63529, g: 0.30196, b: 0.38039); //     #A24D61
const MAROON_C = Color(r: 0.77255, g: 0.37255, b: 0.45098); //     #C55F73
const MAROON_B = Color(r: 0.92549, g: 0.57255, b: 0.67059); //     #EC92AB
const MAROON_A = Color(r: 0.92549, g: 0.67059, b: 0.75686); //     #ECABC1
const PURPLE_E = Color(r: 0.39216, g: 0.2549, b: 0.44706); //      #644172
const PURPLE_D = Color(r: 0.44314, g: 0.33333, b: 0.5098); //      #715582
const PURPLE_C = Color(r: 0.60392, g: 0.44706, b: 0.67451); //     #9A72AC
const PURPLE_B = Color(r: 0.69412, g: 0.53725, b: 0.77647); //     #B189C6
const PURPLE_A = Color(r: 0.79216, g: 0.63922, b: 0.9098); //      #CAA3E8

const BLUE = BLUE_C;
const TEAL = TEAL_C;
const GREEN = GREEN_C;
const YELLOW = YELLOW_C;
const GOLD = GOLD_C;
const RED = RED_C;
const MAROON = MAROON_C;
const PURPLE = PURPLE_C;

const LIGHT_GRAY = Color(r: 0.73333, g: 0.73333, b: 0.73333); //   #BBBBBB
const LIGHT_GREY = Color(r: 0.73333, g: 0.73333, b: 0.73333); //   #BBBBBB
const GRAY = Color(r: 0.53333, g: 0.53333, b: 0.53333); //         #888888
const GREY = Color(r: 0.53333, g: 0.53333, b: 0.53333); //         #888888
const DARK_GREY = Color(r: 0.26667, g: 0.26667, b: 0.26667); //    #444444
const DARK_GRAY = Color(r: 0.26667, g: 0.26667, b: 0.26667); //    #444444
const DARKER_GREY = Color(r: 0.13333, g: 0.13333, b: 0.13333); //  #222222
const DARKER_GRAY = Color(r: 0.13333, g: 0.13333, b: 0.13333); //  #222222

const GREY_BROWN = Color(r: 0.45098, g: 0.38824, b: 0.34118); //   #736357
const PINK = Color(r: 0.81961, g: 0.27843, b: 0.74118); //         #D147BD
const LIGHT_PINK = Color(r: 0.86275, g: 0.45882, b: 0.80392); //   #DC75CD
const GREEN_SCREEN = Color(r: 0.0, g: 1.0, b: 0.0); //             #00FF00
const ORANGE = Color(r: 1.0, g: 0.52549, b: 0.18431); //           #FF862F

//* Defaults
const DEFAULT_MOBJECT_TO_EDGE_BUFFER = MED_LARGE_BUFFER;
const DEFAULT_MOBJECT_TO_MOBJECT_BUFFER = MED_LARGE_BUFFER;

const DEFAULT_STROKE_WIDTH = 4.0;

const DEFAULT_DOT_RADIUS = 0.08;
const DEFAULT_SMALL_DOT_RADIUS = 0.04;
const DEFAULT_DASH_LENGTH = 0.05;
const DEFAULT_ARROW_TIP_LENGTH = 0.35;

const DEFAULT_ANIMATION_RUN_TIME = 1.0;
const DEFAULT_ANIMATION_LAG_RATIO = 0.0;
const DEFAULT_ANIMATION_LAGGED_START_LAG_RATIO = 0.05;

//* Helpers
const TIP_AT_START = TipSide.Start;
const TIP_AT_END = TipSide.End;
