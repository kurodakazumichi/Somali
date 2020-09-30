class Graph1 extends Somali.Scene {
  constructor() {
    super({id:"graph1"});
  }
}

class Graph2 extends Somali.Scene {
  constructor() {
    super({id: "graph2", gui:true})
  }
}

new Graph1();
new Graph2();

