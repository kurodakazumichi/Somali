import Node from '../Node';
import Coord from '../../Props/Coord';
import Shapes from '../../Props/Shapes';
/******************************************************************************
 * Konva.Groupのプロパティを再定義するためのGroup基底クラス
 *****************************************************************************/
export default class GroupBase extends Node {
    protected shapes: Shapes;
    constructor(coord: Coord, shapes: Shapes);
    /** Konva.Group系列のインスタンスを生成して返す */
    protected createNode(): import("konva/types/Group").Group;
    protected get group(): import("konva/types/Group").Group;
    add(children: Node): this;
}
//# sourceMappingURL=Group.d.ts.map