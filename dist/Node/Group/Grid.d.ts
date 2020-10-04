import Group from './Group';
import Coord from '../../Props/Coord';
import Shapes from '../../Props/Shapes';
/******************************************************************************
 * Grid
 *****************************************************************************/
export default class Grid extends Group {
    constructor(coord: Coord, shapes: Shapes);
    centerStroke(color: string): this;
    linesStroke(color: string): this;
    /** コンストラクタで呼び出す */
    private initilize;
    /** 中心軸を作成 */
    private createCenterAxis;
    /** グリッド線を作成 */
    private createLine;
    /** 垂直線を作成 */
    private createVerticalLines;
    /** 水平線を作成 */
    private createHorizonLines;
    private createLables;
    /** 中心軸XY */
    private centerAxis;
    /** その他の線 */
    private lines;
    /** Label */
    private labels;
}
//# sourceMappingURL=Grid.d.ts.map