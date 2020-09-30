import Konva from 'konva';
import Node from '../Node';
import Coord from '../../Props/Coord';
import Shapes from '../../Props/Shapes';

/******************************************************************************
 * Konva.Groupのプロパティを再定義するためのGroup基底クラス
 *****************************************************************************/
export default class GroupBase extends Node
{
  protected shapes:Shapes;

  constructor(coord:Coord, shapes:Shapes) 
  {
    super(coord);
    this.shapes = shapes;
  }
  
  //---------------------------------------------------------------------------
  // オーバーライド
  //---------------------------------------------------------------------------
  /** Konva.Group系列のインスタンスを生成して返す */
  protected createNode(){
    return new Konva.Group();
  }

  protected get group() {
    return this.node as Konva.Group;
  }

  //---------------------------------------------------------------------------
  // Konva.Groupのメソッドのラッパー
  //---------------------------------------------------------------------------

  public add(children:Node) {
    this.group.add(children.node);
    return this;
  }
}