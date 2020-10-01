class Graph1 extends Somali.Scene {
  get option() {
    return {
      id:"graph1",
      width : 800,
      height: 400,
      unit  : 25,
    }
  }

  initNodes(shapes, groups) {
    return {
      grid: groups.grid(),
      circle: shapes.circle().pos(0, 0).radius(3)
    }
  }
}

class Graph2 extends Somali.Scene {
  get option() {
    return {
      id:"graph2",
    }
  }

  initNodes(shapes, groups) {
    return {
      grid: groups.grid(),
      circle: shapes.circle().pos(0, 0).radius(3)
    }
  }
}

class Graph3 extends Somali.Scene {
  get option() {
    return {
      id:"graph3",
      width : 800,
      height: 400,
      unit  : 25,      
    }
  }

  initNodes(shapes, groups) {
    return {
      grid: groups.grid(),
      circle: shapes.circle().pos(0, 0).radius(3)
    }
  }
}

new Graph1().build();
new Graph2().build();
new Graph3().build();