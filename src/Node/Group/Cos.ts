import Group from './Group';
import Coord from '../../Props/Coord';
import Shapes from '../../Props/Shapes';

/******************************************************************************
 * cos カーブ
 *****************************************************************************/
export default class Cos extends Group{
  constructor(coord:Coord, shapes:Shapes) {
    super(coord, shapes);

    const datas = [
      {x: -4, y: 0, text: "-360"},
      {x: -2, y: 0, text: "-180"},
      {x: -0, y: 0, text: "0"},
      {x:  2, y: 0, text: "180"},
      {x:  4, y: 0, text: "360"},
    ]

    this.add(this.shapes.cos());

    datas.map((data) => {
      this.add(shapes.text().pos(data.x, data.y).text(data.text));
      this.add(shapes.point().pos(data.x, data.y).radius(0.05));
    })
  }
}