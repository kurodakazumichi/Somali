import Group from './Group';
import { Line, Arrow, Text } from '../Shape'
import Coord from '../../Props/Coord';
import Shapes from '../../Props/Shapes';
import sColor from '../../System/sColor';

/******************************************************************************
 * Grid
 *****************************************************************************/
export default class Grid extends Group {

  constructor(coord:Coord, shapes:Shapes) {
    super(coord, shapes);
    this.centerAxis = [];
    this.lines      = [];
    this.labels     = [];
    this.initilize();
  }

  //---------------------------------------------------------------------------
  // 属性設定メソッド
  //---------------------------------------------------------------------------
  centerStroke(color:string) {
    this.centerAxis.map((axis) => { axis.stroke(color); })
    return this;
  }
  linesStroke(color:string) {
    this.lines.map((line) => { line.stroke(color); })
    return this;
  }

  //---------------------------------------------------------------------------
  // Private
  //---------------------------------------------------------------------------
  /** コンストラクタで呼び出す */
  private initilize() 
  {
    this.createCenterAxis();
    this.createVerticalLines();
    this.createHorizonLines();
    this.createLables();

    this.lines.map((line) => {
      this.add(line);
    })

    this.centerAxis.map((axis) => {
      this.add(axis);
    });

    this.labels.map((label) => {
      this.add(label);
    })
  }

  /** 中心軸を作成 */
  private createCenterAxis() {
    this.centerAxis.push(this.shapes.arrowX());
    this.centerAxis.push(this.shapes.arrowY());
  }

  /** グリッド線を作成 */
  private createLine(points:number[]) {
    return this.shapes.solidLine()
      .strokeWidth(1)
      .stroke(sColor.grid)
      .points(points);     
  }

  /** 垂直線を作成 */
  private createVerticalLines() 
  {
    const count = Math.floor(this.coord.right);

    for (let x = -count; x <= count; ++x) {
      const p = [x, this.coord.down, x, this.coord.top];
      this.lines.push(this.createLine(p));
    }
  }

  /** 水平線を作成 */
  private createHorizonLines() {
    const count = Math.floor(this.coord.top);

    for (let y = -count; y <= count; ++y) {
      const p = [this.coord.left, y, this.coord.right, y];
      this.lines.push(this.createLine(p));
    }
  }

  private createLables() {
    const params = [
      {text:"x", x:this.coord.right, y:0, offsetX:-14, offsetY:0 },
      {text:"y", y:this.coord.top  , x:0, offsetX:5 , offsetY:0 }
    ]

    params.map((p) => {
      const label = this.shapes.text(p.text)
        .pos(p.x, p.y)
        .fontSize(15)
        .offsetX(p.offsetX)
        .offsetY(p.offsetY)
        .italic();

      this.labels.push(label);
    })
    
  }

  /** 中心軸XY */
  private centerAxis:Arrow[];

  /** その他の線 */
  private lines:Line[]

  /** Label */
  private labels:Text[];
}