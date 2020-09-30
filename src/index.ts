/******************************************************************************
 * グラフやGUIを統括するシーンクラス
 *****************************************************************************/
import Konva from 'konva';
import { GUI } from 'dat.gui';
import Coord from './Props/Coord';
import Stage from './Props/Stage';
import * as util from './Helper/util';
import { Circle } from './Node/Shape';

//-----------------------------------------------------------------------------
// シーンの設定データ
//-----------------------------------------------------------------------------
export interface IConfig {
  id      :string;
  width   :number;
  height  :number;
  unit    :number;
  bgColor :string;
  gui     :boolean;
}

//-----------------------------------------------------------------------------
// シーンのオプションデータ
//-----------------------------------------------------------------------------
export interface IOption {
  id      :string;
  width?  :number;
  height? :number;
  unit?   :number;
  bgColor?:string;
  gui?    :boolean;
}

//-----------------------------------------------------------------------------
// シーン
//-----------------------------------------------------------------------------
export class Scene {
  protected props = {
    coord: new Coord(),
    stage: new Stage(),
  }

  private _gui:GUI|null = null;

  private dom:{root: HTMLDivElement|null, graph:HTMLDivElement|null, gui:HTMLDivElement|null} = {
    root : null,
    graph: null,
    gui  : null,
  }

  private config:IConfig = {
    id     : "",
    width  : 500,
    height : 500,
    unit   : 50,
    bgColor: "black",
    gui    : false,
  };

  constructor(option:IOption) {
    this.config = Object.assign(this.config, option);

    this.initDOM();

    this.props.stage.init({container: this.dom.graph, width: this.config.width, height: this.config.height, bgColor: this.config.bgColor});
    this.props.coord.init(this.config.width, this.config.height, this.config.unit);

    if (this.config.gui) {
      this._gui = new GUI({autoPlace:false});
      this.dom.gui?.appendChild(this._gui.domElement);
    }

    const layer = new Konva.Layer();

    const rect = new Konva.Rect({
      x:this.props.coord.x(0),
      y: this.props.coord.y(0),
      width: this.props.coord.u2px(1),
      height:-this.props.coord.u2px(2),
      fill:"red"
    });
    
    const circle = new Circle(this.props.coord);
    circle.pos(0, 0).radius(1).fill("blue");

    layer.add(rect);
    layer.add(circle.node);
    this.props.stage.add(layer);

  }

  private initDOM() {

    this.dom.root = document.getElementById(this.config.id) as HTMLDivElement;

    this.dom.graph = util.div({className:"graph"});
    this.dom.root.appendChild(this.dom.graph);

    if (this.config.gui) {
      this.dom.gui = util.div({className:"gui"});
      this.dom.root.appendChild(this.dom.gui);
    }
  }
}