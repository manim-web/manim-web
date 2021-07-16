@JS()
library util.tex_generation.web;

import 'package:js/js.dart';

@JS('tex2svg')
external String _texToSVG(String content, bool inline);

String texToSVG(String content) => _texToSVG(content, false);
