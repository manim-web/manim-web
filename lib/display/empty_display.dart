part of display;

class EmptyDisplay extends AbstractDisplay {
  @override
  void bindEventListeners() {}

  @override
  AbstractRenderer createRenderer() => EmptyRenderer();

  @override
  Future<double> nextFrame() async => 0;

  @override
  void setDisplaySize(int width, int height) {}

  @override
  void unbindEventListeners() {}
}
