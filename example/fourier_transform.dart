import 'package:manim_web/manim.dart';

const resolution = 3;

class FourierScene extends Scene {
  late Axes timeAxes;
  late Axes frequencyAxes;
  late NumberPlane circlePlane;
  late DashedVMobject dashedCircle;
  late SurroundingRectangle frequencyBox;
  late Dot centerOfMass;
  late Dot fourierDot;
  late FunctionGraph fourierGraph;
  late FunctionGraph wave;
  late ParametricFunction polarized;
  late VMobject partialFourierGraph;

  double windingFrequency = 0;

  @override
  FutureOr<void> preload() {
    // Tex.preload(r'cycles / second');
    // Number.preload();
    MathTex.preload(r'\hat{g}(f) = \int^{+\infty}_{-\infty} g(t)'
        r' e^{-2 \pi ift} dt');
  }

  @override
  Future construct() async {
    await addWaveWithAxes();
    windingFrequency = 5;
    await addPolarizedWaveWithAxes();

    addFrequencyAxes();
    await playMany([FadeIn(frequencyAxes), FadeIn(frequencyBox)]);
    fourierGraph = getFourierGraph(wave);

    await addDots();
    // await addText();
    await showFourierGraphCreation();
    await addFormula();

    makeInteractive();

    await continueRendering();
  }

  Future addFormula() async {
    var tex = MathTex(r'\hat{g}(f) = \int^{+\infty}_{-\infty} g(t)'
        r' e^{-2 \pi ift} dt')
      ..toCorner(corner: UR)
      ..scaleUniformly(1.2);
    await play(ShowCreation(tex));
  }

  Future addAllAxes() async {
    addCirclePlane();
    addFrequencyAxes();
    await play(FadeIn(circlePlane));
    await play(FadeIn(frequencyAxes));
  }

  Future addDots() async {
    partialFourierGraph = VMobject()
      ..setFill(color: TRANSPARENT)
      ..setPoints([fourierGraph.getEnd()]);
    centerOfMass = Dot(ORIGIN)..setColor(color: RED_C);
    fourierDot = Dot(fourierGraph.getEnd())..setColor(color: RED_C);

    centerOfMass
        .addUpdater((dot, dt) => dot..moveToPoint(polarized.getCenterOfMass()));

    await play(FadeIn(centerOfMass));
    await play(FadeIn(fourierDot));

    fourierDot.addUpdater(fourierDotCreationUpdater);
  }

  Mobject fourierDotCreationUpdater(Mobject dot, double dt) =>
      dot..moveToPoint(partialFourierGraph.getStart());

  // TODO Fix this
  // Future addText() async {
  //   var windingFreqTex = Number(windingFrequency)..setColor(color: LIGHT_GRAY);

  //   var windingUnits = Tex('cycles / second')..setColor(color: LIGHT_GRAY);

  //   VGroup([windingFreqTex, windingUnits])
  //     ..scaleUniformly(0.8)
  //     ..arrange(buffer: SMALL_BUFFER)
  //     ..nextToMobject(circlePlane, direction: UP);

  //   await playMany([FadeIn(windingFreqTex), FadeIn(windingUnits)]);

  //   windingFreqTex.addUpdater((mob, dt) {
  //     windingFreqTex
  //       ..changeValue(windingFrequency)
  //       ..scaleUniformly(0.8)
  //       ..setColor(color: LIGHT_GRAY);

  //     return mob;
  //   });
  // }

  Future showFourierGraphCreation() async {
    addToFront([fourierDot, partialFourierGraph]);

    partialFourierGraph.addUpdater((graph, dt) =>
        graph..pointwiseBecomePartial(fourierGraph, windingFrequency / 5, 1));

    await play(getFrequencyChangeAnimation(wave, polarized, 5, 2, runTime: 12));
    await play(getFrequencyChangeAnimation(wave, polarized, 2, 0, runTime: 10));

    remove([partialFourierGraph]);
    add([fourierGraph]);
  }

  Future addWaveWithAxes() async {
    addTimeAxes();
    // wave = getCosineWave(shiftVal: 0, scaleVal: 1.8); // positive and negative
    wave = getCosineWave(); // positive only
    await play(FadeIn(timeAxes));
    await play(ShowCreation(wave));
  }

  Future addPolarizedWaveWithAxes() async {
    addCirclePlane();
    var polarizedTarget = getPolarizedMobject(wave, windingFrequency);
    polarized = wave.copy();
    await play(FadeIn(circlePlane));
    await play(Transform(polarized, target: polarizedTarget));
  }

  void makeInteractive() {
    fourierDot.removeUpdater(fourierDotCreationUpdater);

    var draggableDot = DraggableMobject(mob: fourierDot);
    draggableDot.addUpdater(draggableDotOnFunctionUpdater);

    add([draggableDot]);
  }

  Mobject draggableDotOnFunctionUpdater(Mobject dot, double dt) {
    var coords = frequencyAxes.pointToCoords(fourierDot.getPos());
    var x = clip(coords.x, 0, 5).toDouble();
    var y = fourierGraph.getValueFromFunction(x);
    var pt = frequencyAxes.c2p(Vector3(x, y, 0));
    fourierDot.moveToPoint(pt);

    windingFrequency = x;
    polarized.become(getPolarizedMobject(wave, x));

    return dot;
  }

  FunctionGraph getFourierGraph(FunctionGraph wave) {
    return frequencyAxes.getGraph((x) => getFourierTransform(x, wave).real,
        stepSize: 0.05 / resolution);
  }

  Complex getFourierTransform(double x, ParametricFunction wave,
      {bool useAlmostFourierTransform = true}) {
    var anchors = wave.getAnchors();

    var _polarizePoint = (Vector3 pt, double freq) {
      var coords = timeAxes.pointToCoords(pt);

      var t = coords.x;
      var y = coords.y;

      var z = Complex.exp(angle: -TAU * freq * t) * Complex.fromDouble(y);

      return z;
    };

    var polarizedPoints = [for (var pt in anchors) _polarizePoint(pt, x)];

    // TODO When the fft function will be working properly, use the code bellow
    // var coords = [for (var pt in anchors) timeAxes.p2c(pt)];
    // var values = [for (var c in coords) c.y];

    // var polarizedPoints = fft(values);

    var scalar = Complex.fromDouble(
        useAlmostFourierTransform ? 1 / polarizedPoints.length : 1);

    return polarizedPoints.reduce((a, b) => a + b) * scalar;
  }

  Axes addTimeAxes() {
    timeAxes = Axes(
      xMin: 0,
      xMax: 4.4,
      yMin: -1,
      yMax: 2.5,
      xAxisConfig: AxisConfig(
        tickFrequency: 0.25,
        numbersWithElongatedTicks: [0, 1, 2, 3, 4],
        unitSize: 2,
      ),
      yAxisConfig: AxisConfig(
        unitSize: 0.5,
        numbersWithElongatedTicks: [],
      ),
      axisConfig: AxisConfig(
        includeTip: true,
      ),
    )
      ..setColor(color: LIGHT_GREY)
      ..toCorner(corner: UL);

    // TODO Add labels

    return timeAxes;
  }

  NumberPlane addCirclePlane() {
    circlePlane = NumberPlane(xMin: -2.1, yMin: -2.1, yMax: 2.1, xMax: 2.1)
      ..scaleUniformly(0.8)
      ..toCorner(corner: DL);

    dashedCircle = Circle().getDashed(numDashes: 50)
      ..setStroke(width: DEFAULT_STROKE_WIDTH / 2)
      ..scaleUniformly(0.8)
      ..shift(circlePlane.coordsToPoint(ORIGIN));

    circlePlane.addToFront([dashedCircle]);

    return circlePlane;
  }

  Axes addFrequencyAxes() {
    frequencyAxes = Axes(
      axisConfig: AxisConfig(color: TEAL_C),
      xMin: 0,
      xMax: 5,
      xAxisConfig:
          AxisConfig(unitSize: 1, numbersToShow: range(start: 1, end: 6)),
      yMin: -1,
      yMax: 1,
      yAxisConfig:
          AxisConfig(unitSize: 1.4, tickFrequency: 0.5, labelDirection: LEFT),
    )..setColor(color: TEAL_C);

    frequencyAxes.nextToMobject(circlePlane, direction: RIGHT);
    frequencyBox =
        SurroundingRectangle(mobject: frequencyAxes, buff: MED_SMALL_BUFFER)
          ..setStroke(color: TEAL_C);

    // TODO add labels

    return frequencyAxes;
  }

  FunctionGraph getTimeGraph(double Function(double) func,
      [double stepSize = 0.05 / resolution]) {
    return timeAxes.getGraph(func, stepSize: stepSize)
      ..setStroke(color: YELLOW_C)
      ..setFill(color: TRANSPARENT);
  }

  FunctionGraph getCosineWave(
          {List<double> frequencies = const [2],
          double shiftVal = 1,
          double scaleVal = 0.9,
          double stepSize = 0.05 / resolution}) =>
      getTimeGraph(
          (t) =>
              shiftVal +
              scaleVal *
                  sum([for (var freq in frequencies) cos(TAU * t * freq)]),
          stepSize);

  Mobject getPolarizedMobject(Mobject mob, double windingFrequency) {
    var polarizedMobject = mob.copy();
    polarizedMobject.applyFunction((pt) => polarizePoint(pt, windingFrequency));
    return polarizedMobject;
  }

  Vector3 polarizePoint(Vector3 pt, double windingFrequency) {
    var coords = timeAxes.pointToCoords(pt);

    var t = coords.x;
    var y = coords.y;

    var z =
        Complex.exp(angle: -TAU * windingFrequency * t) * Complex.fromDouble(y);

    return circlePlane.coordsToPoint(z.toVector3());
  }

  UpdateFromFunc getPolarizedAnimation(
      Mobject mobject, double windingFrequency) {
    var polarized = getPolarizedMobject(mobject, windingFrequency);

    return UpdateFromFunc(
        mobject: polarized,
        updateFunc: (mob) {
          Transform(mob, target: getPolarizedMobject(mobject, windingFrequency))
              .update(1);
          return mob;
        });
  }

  Future animateFrequencyChange(List<Tuple2<Mobject, Mobject>> mobjects,
      double startWindingFrequency, double newWindingFrequency,
      {double runTime = 3, List<Animation> addedAnimations = const []}) async {
    await playMany([
      for (var mob in mobjects)
        getFrequencyChangeAnimation(
            mob.item1, mob.item2, startWindingFrequency, newWindingFrequency),
      ...addedAnimations
    ]);
  }

  UpdateFromAlphaFunc getFrequencyChangeAnimation(
      Mobject mobject,
      Mobject polarized,
      double startWindingFrequency,
      double newWindingFrequency,
      {double runTime = 3}) {
    return UpdateFromAlphaFunc(
        mobject: polarized,
        updateFunc: (pm, alpha) {
          var freq =
              interpolate(startWindingFrequency, newWindingFrequency, alpha);
          windingFrequency = freq;

          var newPm = getPolarizedMobject(mobject, freq);

          pm.become(newPm);

          return pm;
        },
        runTime: runTime);
  }
}

// class Number extends VGroup {
//   late SingleStringMathTex a;
//   late SingleStringMathTex b;
//   late SingleStringMathTex c;
//   late SingleStringMathTex dot;
//   late VectorizedPoint pt;

//   late List<SingleStringMathTex> digits;

//   Number(double val) {
//     if (val > 10) {
//       val = 9.99;
//     } else if (val < 0) {
//       val = 0;
//     }

//     var str = val.toStringAsFixed(2);
//     dot = SingleStringMathTex('.');
//     a = SingleStringMathTex(str[0]);
//     b = SingleStringMathTex(str[2]);
//     c = SingleStringMathTex(str[3]);
//     pt = VectorizedPoint();
//     add([a, b, c, dot, pt]);
//     digits = [a, dot, b, c];

//     positionDigits();
//   }

//   void changeValue(double val) {
//     var str = val.toStringAsFixed(2);

//     var _a = SingleStringMathTex(str[0]);
//     _a.shift(a.getPos());
//     a.become(_a);

//     var _b = SingleStringMathTex(str[2]);
//     _b.shift(b.getPos());
//     b.become(_b);

//     var _c = SingleStringMathTex(str[3]);
//     _c.shift(c.getPos());
//     c.become(_c);
//   }

//   void positionDigits() {
//     VGroup(digits)
//       ..arrange(buffer: SMALL_BUFFER)
//       ..shift(pt.getPos());
//     dot.shift(DOWN * getHeight() * 0.4);
//   }

//   static void preload() {
//     for (var i in range(end: 10)) {
//       SingleStringMathTex.preload(i.toString());
//     }
//     SingleStringMathTex.preload('.');
//   }
// }
