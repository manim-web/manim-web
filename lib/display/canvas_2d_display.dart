part of display.html;

class Canvas2DDisplay extends AbstractHTMLDisplay {
  Canvas2DDisplay(Element container) : super(container: container);

  @override
  AbstractRenderer createRenderer() => Canvas2DRenderer();
}
