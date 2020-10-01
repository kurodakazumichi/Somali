class Graph1 extends Somali.Scene 
{
  get option() {
    return {id:"graph1", gui:true}
  }

  constructor() {
    super();
    this.params = {
      x1:0,
      y1:0,
      x2:1,
      y2:1,
      x3:3,
      y3:2,
      fill:"#000",
      stroke: "#FFF",
      strokeWidth: 1,
      dash:0,
      closed:false
    }
  }

  initGui(gui) {
    const v1 = gui.addFolder("頂点１");
    v1.add(this.params, "x1");
    v1.add(this.params, "y1");
    v1.open();

    const v2 = gui.addFolder("頂点２");
    v2.add(this.params, "x2");
    v2.add(this.params, "y2");
    v2.open();

    const v3 = gui.addFolder("頂点３");
    v3.add(this.params, "x3");
    v3.add(this.params, "y3");
    v3.open();

    const config = gui.addFolder("線の設定");
    config.addColor(this.params, "fill");
    config.addColor(this.params, "stroke");
    config.add(this.params, "strokeWidth");
    config.add(this.params, "dash");
    config.add(this.params, "closed");
    config.open();
  }

  createNodes(shapes, groups) {
    return {
      grid: groups.grid(),
      line: shapes.line()
    }
  }

  update() {
    this.nodes.line
      .points(this.points)
      .fill(this.params.fill)
      .stroke(this.params.stroke)
      .strokeWidth(this.params.strokeWidth)
      .dash(this.params.dash)
      .closed(this.params.closed)
  }

  get points() {
    const {x1, y1, x2, y2, x3, y3 } = this.params;
    return [x1, y1, x2, y2, x3, y3];
  }  
}

new Graph1().build();