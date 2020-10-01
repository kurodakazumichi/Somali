import Konva from 'konva';
import Node from '../Node';

/******************************************************************************
 * Konva.Shapeのプロパティを再定義するためのNode基底クラス
 *****************************************************************************/
export default abstract class Shape extends Node {

  //---------------------------------------------------------------------------
  // Konva.Shapeの属性をセットするメソッド郡
  //---------------------------------------------------------------------------

  fill(color:string) {
    this.node.setAttr("fill", color); return  this;
  }

  stroke(color:string) {
    this.node.setAttr("stroke", color); return this;
  }

  strokeWidth(width:number) {
    this.node.setAttr("strokeWidth", width); return this;
  }

  dash(width:number) {
    this.node.setAttr("dash", [width]); return this;
  }

  radius(radius:number) {
    this.node.setAttr("radius", this.coord.u2px(radius)); return this;
  }  
}