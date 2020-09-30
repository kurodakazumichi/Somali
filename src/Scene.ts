/******************************************************************************
 * グラフやGUIを統括するシーンクラス
 *****************************************************************************/
import Konva from 'konva';
import { GUI } from 'dat.gui';
import Coord from './Props/Coord';
import Stage from './Props/Stage';
import Shapes from './Props/Shapes';
import Groups from './Props/Groups';
import * as util from './Helper/util';
import Node from './Node/Node';


//-----------------------------------------------------------------------------
// シーンの設定データ
//-----------------------------------------------------------------------------
export interface IConfig {
  id      :string;
  width   :number;
  height  :number;
  unit    :number;
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
  gui?    :boolean;
}

//-----------------------------------------------------------------------------
// シーン
//-----------------------------------------------------------------------------
export default class Scene {
  protected props = {
    coord: new Coord(),
    stage: new Stage(),
    shapes: new Shapes(),
    groups: new Groups(),
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
    gui    : false,
  };

  private layer:Konva.Layer;

  constructor(option:IOption) {
    this.config = Object.assign(this.config, option);

    this.initDOM();

    this.props.stage.init({container: this.dom.graph, width: this.config.width, height: this.config.height});
    this.props.coord.init(this.config.width, this.config.height, this.config.unit);
    this.props.shapes.init(this.props.coord);
    this.props.groups.init(this.props.coord, this.props.shapes);

    if (this.config.gui) {
      this._gui = new GUI({autoPlace:false});
      this.dom.gui?.appendChild(this._gui.domElement);
    }

    this.layer = new Konva.Layer();
    this.props.stage.add(this.layer);

    const nodes = {
      c: this.props.shapes.circle().pos(0, 0),
      grid: this.props.groups.grid(),
    }

    this.addNodes(nodes);
    
    this.layer.draw();

  }

  addNodes(nodes:{[key:string]:Node}) {
    Object.values(nodes).map((node) => {
      this.layer.add(node.node);
    })
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