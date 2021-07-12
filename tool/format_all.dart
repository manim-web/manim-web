import 'dart:io';

import 'package:progress_bar/progress_bar.dart';

import 'utils/get_all_files.dart';
import 'utils/get_lib_dir.dart';

void main() async {
  var lib = await getLibDirectory();
  var files = await getAllFiles(directory: lib);
  var dartFiles = files.where((file) => file.path.endsWith('.dart'));
  var bar = ProgressBar(' [:bar] :percent :etas', total: dartFiles.length);

  for (var file in dartFiles) {
    await runFormat(file);
    bar.tick();
  }
}

Future runFormat(File file) => Process.run('dart', ['format', file.path]);
