class Graph1 extends Somali.Scene 
{
  get option() {
    return {id:"graph1", gui:true}
  }

  constructor() {
    super();
    this.params = {
      x:0,
      y:0,
      width:2,
      height:2,
      fill: "#000",
      stroke: "#FFF",
      rotation: 0,
      offsetX:-1,
      offsetY:1,
    }
  }

  initGui(gui) {
    gui.add(this.params, "x").step(0.01).listen();
    gui.add(this.params, "y").step(0.01).listen();
    gui.add(this.params, "width");
    gui.add(this.params, "height");
    gui.addColor(this.params, "fill");
    gui.addColor(this.params, "stroke");
    gui.add(this.params, "rotation");
    gui.add(this.params, "offsetX");
    gui.add(this.params, "offsetY");
  }

  createNodes(shapes, groups) {
    return {
      grid: groups.grid(),
      rect: shapes.rect()
    }
  }

  update() {
    this.nodes.rect
      .pos(this.params.x, this.params.y)
      .width(this.params.width)
      .height(this.params.height)
      .fill(this.params.fill)
      .stroke(this.params.stroke)
      .rotation(this.params.rotation)
      .offset(this.params.offsetX, this.params.offsetY, true);
  }
}

new Graph1().build();