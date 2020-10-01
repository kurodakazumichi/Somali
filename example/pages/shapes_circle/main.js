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
      radius:3,
      opacity:1,
      fill: "#000",
      stroke: "#FFF",
      strokeWidth: 3,
      dash:10,
      visible: true,
      draggable: true,
    }
  }

  initGui(gui) {
    gui.add(this.params, "x").step(0.01).listen();
    gui.add(this.params, "y").step(0.01).listen();
    gui.add(this.params, "radius").min(0);
    gui.add(this.params, "opacity").min(0).max(1).step(0.01);
    gui.addColor(this.params, "fill");
    gui.addColor(this.params, "stroke");
    gui.add(this.params, "strokeWidth");
    gui.add(this.params, "dash");
    gui.add(this.params, "visible");
    gui.add(this.params, "draggable");
  }

  createNodes(shapes, groups) {
    return {
      grid: groups.grid(),
      circle: shapes.circle()
    }
  }

  initNodes(nodes) {
    nodes.circle.on('dragmove', (circle) => {
      this.params.x = circle.x();
      this.params.y = circle.y();
    })
  }

  update() {
    this.nodes.circle
      .pos(this.params.x, this.params.y)
      .radius(this.params.radius)
      .fill(this.params.fill)
      .opacity(this.params.opacity)
      .stroke(this.params.stroke)
      .strokeWidth(this.params.strokeWidth)
      .dash(this.params.dash)
      .visible(this.params.visible)
      .draggable(this.params.draggable)
  }
}

new Graph1().build();