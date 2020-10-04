import Coord from "./Coord";
import * as Shape from "../Node/Shape";
/******************************************************************************
 * Shapeファクトリークラス
 *****************************************************************************/
export default class Shapes {
    private _coord;
    get coord(): Coord;
    init(coord: Coord): void;
    axisX(): Shape.Line;
    axisY(): Shape.Line;
    arrowX(): Shape.Arrow;
    arrowY(): Shape.Arrow;
    circle(): Shape.Circle;
    rect(): Shape.Rect;
    ellipse(): Shape.Ellipse;
    line(): Shape.Line;
    arrow(): Shape.Arrow;
    text(v?: string): Shape.Text;
    star(): Shape.Star;
    wedge(): Shape.Wedge;
    point(): Shape.Circle;
    pointer(): Shape.Circle;
}
//# sourceMappingURL=Shapes.d.ts.map