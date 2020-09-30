import Group from './Group';
import Coord from '../../Props/Coord';
import Shapes from '../../Props/Shapes';

/******************************************************************************
 * XY軸
 *****************************************************************************/
export default class AxisXY extends Group{
  constructor(coord:Coord, shapes:Shapes) {
    super(coord, shapes);
    this
      .add(this.shapes.axisX())
      .add(this.shapes.axisY());
  }
}