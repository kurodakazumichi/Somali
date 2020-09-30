import Coord from "./Coord";
import * as Shape from "../Node/Shape";
import { sColor } from "..";

/******************************************************************************
 * Shapeファクトリークラス
 *****************************************************************************/
export default class Shapes {

  private _coord:Coord|null = null;

  get coord() {
    return this._coord as Coord;
  }

  init(coord:Coord) {
    this._coord = coord;
  }

  axisX() {
    const p = [this.coord.left, 0, this.coord.right, 0];
    return new Shape.Line(this.coord)
      .points(p)
      .stroke(sColor.axisXY)
      .strokeWidth(1);
  }
  axisY() {
    const p = [0, this.coord.down, 0, this.coord.top];
    return new Shape.Line(this.coord)
      .points(p)
      .stroke(sColor.axisXY)
      .strokeWidth(1);
  }
  arrowX() {
    const p = [this.coord.left, 0, this.coord.right, 0];
    return new Shape.Arrow(this.coord)
      .points(p)
      .color(sColor.axisXY)
      .pointerWidth(0.05)
      .pointerLength(0.1)
      .strokeWidth(1);
  }
  arrowY() {
    const p = [0, this.coord.down, 0, this.coord.top];
    return new Shape.Arrow(this.coord)
      .points(p)
      .color(sColor.axisXY)
      .pointerWidth(0.05)
      .pointerLength(0.1)
      .strokeWidth(1);
  }
  solidLine() {
    return new Shape.Line(this.coord)
      .stroke(sColor.main)
      .strokeWidth(2);
  }
  // 補助線
  auxLine() {
    return new Shape.Line(this.coord)
      .stroke(sColor.green)
      .strokeWidth(1);
  }
  brokenLine() {
    return new Shape.Line(this.coord)
      .stroke(sColor.main)
      .strokeWidth(1)
      .dash(0.1);
  }

  point() {
    return new Shape.Circle(this.coord)
      .radius(0.1)
      .fill(sColor.green)
  }
  draggablePoint() {
    return new Shape.Circle(this.coord)
      .radius(0.1)
      .fill(sColor.red)
      .draggable()
  }

  text(v:string = "A") {
    return new Shape.Text(this.coord)
      .text(v)
      .fontSize(16)
      .offset(0.1, -0.1)
      .fontFamily("Hiragino Maru Gothic ProN, meiryo, arial, sans-serif")
      .fill(sColor.text);
  }
  arrow() {
    return new Shape.Arrow(this.coord)
      .pointerLength(0.1)
      .pointerWidth(0.1)
      .color(sColor.main)
      .strokeWidth(2)
  }
  star() {
    return new Shape.Star(this.coord)
      .fill(sColor.yellow)
      .stroke(sColor.main)
      .strokeWidth(1)
      .outerRadius(0.3)
      .innerRadius(0.2)
      .numPoints(5)
  }
  wedge() {
    return new Shape.Wedge(this.coord)
      .fill(sColor.gray)
      .radius(0.5)
      .angle(90)
  }
  circle() {
    return new Shape.Circle(this.coord)
      .radius(1)
      .stroke(sColor.main)
  }
  rect() {
    return new Shape.Rect(this.coord)
      .width(1)
      .height(1)
      .strokeWidth(2)
      .stroke(sColor.main)
  }
}