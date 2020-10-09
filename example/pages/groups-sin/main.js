class Graph1 extends Somali.Scene 
{
  get option() {
    return {id:"graph1", update: false}
  }

  constructor() {
    super();
  }

  createNodes(shapes, groups) {
    return {
      grid: groups.grid().label("θ", "sin"),
      sin : groups.sin(),
    }
  }
}

new Graph1().build();