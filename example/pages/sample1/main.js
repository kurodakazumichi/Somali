class Graph1 extends Somali.Scene {
  get option() {
    return {id:"graph1"}
  }

  initNodes(shapes, groups) {
    return {
      grid: groups.grid()
    }
  }
}

new Graph1().build();

