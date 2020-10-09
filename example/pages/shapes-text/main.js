class Graph1 extends Somali.Scene 
{
  get option() {
    return {id:"graph1", gui:true}
  }

  constructor() {
    super();
    this.params = {
      x:-4,
      y:4,
      width:8,
      height:8,
      fill: "#000",
      stroke: "#FFF",
      strokeWidth:1,
      dash:0,

      fontSize: 72,
      text:"Somali",
      fontStyle:"normal",
      fontFamily:"Impact",
      align:"center",
      verticalAlign:"middle",
    }
  }

  initGui(gui) {
    const text = gui.addFolder("テキストパラメータ");

    text.add(this.params, "fontSize");
    text.add(this.params, "text");
    text.add(this.params, "fontFamily");
    text.add(this.params, "align", ["left", "center", "right"]);
    text.add(this.params, "verticalAlign", ["top", "middle", "bottom"]);
    text.open();

    const common = gui.addFolder("汎用パラメータ");
    common.add(this.params, "x").step(0.01).listen();
    common.add(this.params, "y").step(0.01).listen();
    common.add(this.params, "width");
    common.add(this.params, "height");
    common.addColor(this.params, "fill");
    common.addColor(this.params, "stroke");
    common.add(this.params, "strokeWidth");
    common.add(this.params, "dash");  
    common.open();  
  }

  createNodes(shapes, groups) {
    return {
      grid: groups.grid(),
      text: shapes.text(),
      rect: shapes.rect(),
    }
  }

  update() {
    this.nodes.text
      .pos(this.params.x, this.params.y)
      .width(this.params.width)
      .height(this.params.height)      
      .fill(this.params.fill)
      .stroke(this.params.stroke)
      .strokeWidth(this.params.strokeWidth)
      .dash(this.params.dash)
      .fontSize(this.params.fontSize)
      .text(this.params.text)
      .fontFamily(this.params.fontFamily)
      .align(this.params.align)
      .verticalAlign(this.params.verticalAlign);

    // ガイド用
    this.nodes.rect
      .pos(this.params.x, this.params.y)
      .width(this.params.width)
      .height(this.params.height)
  }
}

new Graph1().build();