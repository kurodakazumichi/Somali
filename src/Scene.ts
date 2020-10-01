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
  update  :boolean;
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
  update? :boolean;
}

//-----------------------------------------------------------------------------
// シーン
//-----------------------------------------------------------------------------
export default class Scene 
{
  /** 小道具 */
  protected props = {
    coord: new Coord(),
    stage: new Stage(),
    shapes: new Shapes(),
    groups: new Groups(),
  }

  /** Sceneが扱うDOMのリスト */
  private dom:{root: HTMLDivElement|null, graph:HTMLDivElement|null, gui:HTMLDivElement|null} = {
    root : null,
    graph: null,
    gui  : null,
  }

  /** シーンの設定 */
  private config:IConfig = {
    id     : "",
    width  : 500,
    height : 500,
    unit   : 50,
    gui    : false,
    update : true,
  };

  /** Konva.Layerインスタンス */
  private layer:Konva.Layer|null = null;

  /** dat.guiインスタンス */
  private _gui:GUI|null = null;

  /** グラフに表示するNodeリスト */
  private nodes:{[key:string]:Node} = {};

  // タイマー
  public timer:number = 0;
  
  //---------------------------------------------------------------------------
  // コンストラクタ
  //---------------------------------------------------------------------------
  constructor() 
  {
    this.execute = this.execute.bind(this);
    this.config = Object.assign(this.config, this.option);
  }

  //---------------------------------------------------------------------------
  // ビルド関連
  //---------------------------------------------------------------------------  
  build() 
  {
    this.initDOM();
    this.initProps();

    this.layer = new Konva.Layer();
    this.props.stage.add(this.layer);

    if (this.config.gui) {
      this._gui = new GUI({autoPlace:false});
      this.dom.gui?.appendChild(this._gui.domElement);
      this.initGui(this._gui);
    }
    
    this.nodes = this.createNodes(this.props.shapes, this.props.groups);
    this.addNodes(this.nodes);
    this.initNodes(this.nodes);
    
    this.draw();
    this.execute();
  }

  private initDOM() {

    this.dom.root = document.getElementById(this.config.id) as HTMLDivElement;
    this.dom.root.className = "somali";

    this.dom.graph = util.div({className:"graph"});
    this.dom.root.appendChild(this.dom.graph);

    if (this.config.gui) {
      this.dom.gui = util.div({className:"gui"});
      this.dom.root.appendChild(this.dom.gui);
    }
  }

  private initProps() {
    this.props.stage.init({container: this.dom.graph, width: this.config.width, height: this.config.height});
    this.props.coord.init(this.config.width, this.config.height, this.config.unit);
    this.props.shapes.init(this.props.coord);
    this.props.groups.init(this.props.coord, this.props.shapes);
  }

  private draw() {
    this.layer?.draw();
  }

  private execute() 
  {
    if (!this.config.update) return;
    this.update();
    this.draw();
    requestAnimationFrame(this.execute);
  }  

  //---------------------------------------------------------------------------
  // 派生先で実装する事を想定しているテンプレートメソッド
  //---------------------------------------------------------------------------

  /** Sceneのオプションオブジェクトを返す */
  get option():IOption {
    return {
      id:"container"
    }
  }

  /** グラフに表示するNodeを生成し、オブジェクトで返す */
  createNodes(shapes:Shapes, groups:Groups) {
    return {}
  }

  /** ノードの初期化処理を記述する */
  initNodes(nodes:{[key:string]:Node}) {
  }

  /** dat.guiの初期化用メソッド */
  initGui(gui:GUI) {

  }

  /** 毎フレーム呼ばれるメソッド、オプションでupdate:falseにすると呼ばれない */
  update() {

  }

  //---------------------------------------------------------------------------
  // Util
  //---------------------------------------------------------------------------  
  addNodes(nodes:{[key:string]:Node}) {
    Object.values(nodes).map((node) => {
      this.layer?.add(node.node);
    })
  }
}