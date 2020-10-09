import Coord from "./Coord";
import * as Group from "../Node/Group";
import Shapes from "./Shapes";

/******************************************************************************
 * Groupファクトリークラス
 *****************************************************************************/
export default class Groups 
{
  private _coord:Coord|null = null;
  private _shapes:Shapes|null = null;

  get coord() {
    return this._coord as Coord;
  }

  get shapes() {
    return this._shapes as Shapes;
  }

  init(coord:Coord, shapes:Shapes) {
    this._coord = coord;
    this._shapes = shapes;
  }

  axisXY() {
    return new Group.AxisXY(this.coord, this.shapes);
  }
  grid() {
    return new Group.Grid(this.coord, this.shapes);
  }
  sin() {
    return new Group.Sin(this.coord, this.shapes);
  }  
  cos() {
    return new Group.Cos(this.coord, this.shapes);
  }
  tan() {
    return new Group.Tan(this.coord, this.shapes);
  }

}