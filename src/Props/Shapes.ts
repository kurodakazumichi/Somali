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

  circle() {
    return new Shape.Circle(this.coord)
      .radius(1)
      .stroke(sColor.main)
  }
}