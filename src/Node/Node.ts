import Konva from 'konva';
import Coord from '../Props/Coord';
import * as Util from '../Helper/util';

/******************************************************************************
 * Konva.Nodeのプロパティを再定義するためのNode基底クラス
 *****************************************************************************/
export default abstract class Node 
{
  //---------------------------------------------------------------------------
  // data
  //---------------------------------------------------------------------------

  /** Konva.Nodeインスタンス */
  private _node:Konva.Shape | Konva.Group;

  /** Coordインスタンス */
  protected coord:Coord;

  //---------------------------------------------------------------------------
  // コンストラクタ
  //---------------------------------------------------------------------------  
  constructor(coord:Coord) {
    this._node = this.createNode();
    this.coord = coord;
  }

  /** Konva.Nodeを生成するメソッド、継承先でオーバーライドすること */
  protected abstract createNode():Konva.Shape | Konva.Group;;

  //---------------------------------------------------------------------------
  // アクセッサ
  //---------------------------------------------------------------------------
  get node() {
    return this._node;
  }

  //---------------------------------------------------------------------------
  // Konva.Nodeの属性ラッパー
  //---------------------------------------------------------------------------  
  width(v:number):this;
  width():number;
  width(...v: [] | [number]):this | number {
    if(typeof v[0] === 'number') {
      this.node.width(this.coord.u2px(v[0]));
      return this;
    } else {
      return this.coord.px2u(this.node.width());
    }
  }

  height(v:number): this;
  height():number;
  height(...v: [] | [number]): this | number {
    if(typeof v[0] === 'number') {
      this.node.height(this.coord.u2px(v[0]));
      return this;
    } else {
      return this.coord.px2u(this.node.height());
    }
  }

  x(v:number): this;
  x():number;
  x(...v: [] | [number]) {
    if (typeof v[0] === 'number') {
      this.node.setAttr("x", this.coord.x(v[0])); return this;
    } else {
      return this.coord.ux(this.node.x());
    }
  }

  y(v:number): this;
  y():number;
  y(...v: [] | [number]) {
    if (typeof v[0] === 'number') {
      this.node.setAttr("y", this.coord.y(v[0])); return this;
    } else {
      return this.coord.uy(this.node.y());
    }
  }

  x2(digit:number = 1) {
    return Util.round(this.x(), digit);
  }
  y2(digit:number = 1) {
    return Util.round(this.y(), digit);
  }

  pos(p:{x:number, y:number}):this;
  pos(x:number, y:number):this;
  pos():{x:number, y:number};

  pos(...v:[]|[number, number]|[{x:number, y:number}]){
    switch(v.length) {
      case 0: return { x:this.x(), y:this.y()};
      case 1: this.x(v[0].x).y(v[0].y); break;
      case 2: this.x(v[0]).y(v[1]); break;
    }
    return this;
  }

  visible(v:boolean):this;
  visible():boolean;
  visible(...v:[] | [boolean]) {
    if (typeof v[0] === 'boolean') {
      this.node.setAttr("visible", v[0]); return this;
    } else {
      return this.node.visible();
    }
  }

  draggable(flg:boolean = true) {
    this.node.setAttr("draggable", flg); 
    if (flg) {
      this.on("mouseover", () => { document.body.style.cursor = "pointer"; });
      this.on("mouseout", () => { document.body.style.cursor = "default"; })
    } else {
      this.off("mouseover").off("mouseout");
    }
    return this;
  }

  offsetX(v:number) {
    this.node.offsetX(-this.coord.u2px(v));
    return this;
  }
  offsetY(v:number) {
    this.node.offsetY(this.coord.u2px(v));
    return this;
  }
  offset(x:number, y:number) {
    return this.offsetX(x).offsetY(y);
  }

  destroy() {
    this.node.destroy();
  }

  on(evtStr:string, cb:(e:this) => void) {
    (this.node as any).on(evtStr, () =>  {
      cb(this);
    });
    return this;
  }
  off(evtStr:string) {
    this.node.off(evtStr);
    return this;
  }
  opacity(v:number) {
    this.node.opacity(v); return this;
  }
  rotation(v:number) {
    this.node.rotation(v); return this;
  }  
}
