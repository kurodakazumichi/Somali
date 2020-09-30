import Konva from 'konva';
import { GUI } from 'dat.gui';
import Coord from './Component/Coord';
import Stage, { IConfig } from './Component/Stage';

export class SceneConfig {
  public id:string = "";
  public width:number = 500;
  public height:number = 500;
  public unit:number = 50;
  public bgColor:string = "black";
  public gui:boolean = false;
}

export class Scene {
  protected components = {
    coord: new Coord(),
    stage: new Stage(),
  }

  private _gui:GUI|null = null;

  private dom:{root: HTMLDivElement|null, graph:HTMLDivElement|null, gui:HTMLDivElement|null} = {
    root : null,
    graph: null,
    gui  : null,
  }

  private config:SceneConfig;

  constructor(config:SceneConfig) {
    this.config = config;

    this.initDOM();

    this.components.stage.init({container: this.dom.graph, width: config.width, height: config.height, bgColor: config.bgColor});
    this.components.coord.init(config.width, config.height, config.unit);

    if (config.gui) {
      this._gui = new GUI({autoPlace:false});
      this.dom.gui?.appendChild(this._gui.domElement);
    }

    const layer = new Konva.Layer();

    const rect = new Konva.Rect({
      x:this.components.coord.x(0),
      y: this.components.coord.y(0),
      width: this.components.coord.u2px(1),
      height:-this.components.coord.u2px(2),
      fill:"red"
    });

    layer.add(rect);
    this.components.stage.add(layer);

  }

  private initDOM() {

    this.dom.root = document.getElementById(this.config.id) as HTMLDivElement;

    this.dom.graph = document.createElement("div");
    this.dom.graph.className = "graph";
    this.dom.root.appendChild(this.dom.graph);
    if (this.config.gui) {
      this.dom.gui = document.createElement("div");
      this.dom.gui.className = "gui";
      this.dom.root.appendChild(this.dom.gui);
    }

  }
}