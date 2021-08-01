import 'package:http/http.dart' as http;

// TODO this doesn't work, it triggers a CORS error
//? implement a backend to make requests on serverside
Future<String> getTexSVG(String fullTexDocument) async {
  // create request
  var parts = fullTexDocument.split(r'\begin{document}');
  var preamble = Uri.encodeComponent(parts[0]);
  var formula = Uri.encodeComponent(parts[1]);
  var body = 'preamble=$preamble&formula=$formula&mode=2';
  var uri = Uri.parse('https://www.quicklatex.com/latex3.f');

  // send request
  var res = await http.post(
    uri,
    body: body,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  );

  // check if success
  if (!res.body.startsWith('0')) {
    throw 'Tex generation failed : \n ${res.body}';
  }

  // extract png url
  var start = res.body.indexOf('https');
  var end = res.body.lastIndexOf('png') - 3;

  var uri2 = Uri.parse(res.body.substring(start, end) + 'svg');
  var svg = await http.get(uri2);

  return svg.body;
}

var texTemplate = r'''
\documentclass[preview]{standalone}

\usepackage[english]{babel}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\usepackage{amssymb}
\usepackage{dsfont}
\usepackage{setspace}
\usepackage{tipa}
\usepackage{relsize}
\usepackage{textcomp}
\usepackage{mathrsfs}
\usepackage{calligra}
\usepackage{wasysym}
\usepackage{ragged2e}
\usepackage{physics}
\usepackage{xcolor}
\usepackage{microtype}
\usepackage{pifont}
\DisableLigatures{encoding = *, family = * }
\linespread{1}

\begin{document}

[tex_expression]

\end{document}
''';

String getTexDocument(String texString,
    {String container = 'center', bool useBeginEnd = true}) {
  var containerStart = useBeginEnd ? '\\begin{$container}}' : container;
  var containerEnd = useBeginEnd ? '\\end{$container}}' : container;
  var texDocumentContent = '$containerStart\n$texString\n$containerEnd';

  return texTemplate.replaceAll('[tex_expression]', texDocumentContent);
}
