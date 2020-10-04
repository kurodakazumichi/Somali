import Coord from "./Coord";
import * as Group from "../Node/Group";
import Shapes from "./Shapes";
/******************************************************************************
 * Groupファクトリークラス
 *****************************************************************************/
export default class Groups {
    private _coord;
    private _shapes;
    get coord(): Coord;
    get shapes(): Shapes;
    init(coord: Coord, shapes: Shapes): void;
    axisXY(): Group.AxisXY;
    grid(): Group.Grid;
}
//# sourceMappingURL=Groups.d.ts.map