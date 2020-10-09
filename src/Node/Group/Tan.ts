import Group from './Group';
import Coord from '../../Props/Coord';
import Shapes from '../../Props/Shapes';

/******************************************************************************
 * tan カーブ
 *****************************************************************************/
export default class Tan extends Group{
  constructor(coord:Coord, shapes:Shapes) {
    super(coord, shapes);

    const datas = [
      {x: -4, y: 0, text: "-360"},
      {x: -2, y: 0, text: "-180"},
      {x: -0, y: 0, text: "0"},
      {x:  2, y: 0, text: "180"},
      {x:  4, y: 0, text: "360"},
    ]

    // グラフサイズからラインの数を決定する。必ず奇数になるようにする。
    let lineCount = Math.floor(this.coord.uw / 2);
    if (lineCount % 2 == 0) lineCount++;

    // ラインの数だけtanのグラフを生成する。
    for (let i = 0; i < lineCount; ++i) 
    {
      const line = this.shapes.line();
      const points = [];

      for(let t = -0.9; t < 0.9; t += 0.1) {
        const bias = -(lineCount / 2 * 2) + 1 + (2 * i);
        points.push(bias + t, Math.tan((bias + t) * Math.PI / 2))
      }

      line.points(points);
      this.add(line);
    }

    datas.map((data) => {
      this.add(shapes.text().pos(data.x, data.y).text(data.text));
      this.add(shapes.point().pos(data.x, data.y).radius(0.05));
    })
  }
}