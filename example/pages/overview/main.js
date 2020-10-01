class Graph1 extends Somali.Scene {
}

class Graph2 extends Somali.Scene {
  get option() {
    return {id:"graph2"}
  }

  createNodes(shapes, groups) {
    return {
      grid: groups.grid(),
      circle: shapes.circle().pos(0, 0).radius(3)
    }
  }
}

class Graph3 extends Somali.Scene 
{
  get option() {
    return {id:"graph3", gui: true}
  }

  constructor() {
    super();
    this.params = {
      x:0,
      y:0,
      r:1,
    }
  }  

  initGui(gui) {
    gui.add(this.params, "x").step(0.01);
    gui.add(this.params, "y").step(0.01);
    gui.add(this.params, "r").step(0.01);
  }

  createNodes(shapes, groups) {
    return {
      grid: groups.grid(),
      circle: shapes.circle().pos(0, 0).radius(this.params.r),
    }
  }

  update() {
    this.nodes.circle
      .pos(this.params.x, this.params.y)
      .radius(this.params.r);
  }
}

class Graph4 extends Somali.Scene 
{
  get option() {
    return {id:"graph4"}
  }

  constructor() {
    super();
  }  

  createNodes(shapes, groups) {
    return {
      grid: groups.grid(),
      circle: shapes.circle().pos(0, 0).radius(2).fill(Somali.sColor.red),
    }
  }

  update() {
    this.timer += 0.05;


    this.nodes.circle
      .pos(Math.sin(this.timer), Math.cos(this.timer))
      .radius(Math.abs(Math.sin(this.timer)));
  }
}

new Graph1().build();
new Graph2().build();
new Graph3().build();
new Graph4().build();