import Konva from 'konva';
import Coord from '../Props/Coord';
/******************************************************************************
 * Konva.Nodeのプロパティを再定義するためのNode基底クラス
 *****************************************************************************/
export default abstract class Node {
    /** Konva.Nodeインスタンス */
    private _node;
    /** Coordインスタンス */
    protected coord: Coord;
    constructor(coord: Coord);
    /** Konva.Nodeを生成するメソッド、継承先でオーバーライドすること */
    protected abstract createNode(): Konva.Shape | Konva.Group;
    get node(): import("konva/types/Group").Group | import("konva/types/Shape").Shape<import("konva/types/Shape").ShapeConfig>;
    width(v: number): this;
    width(): number;
    height(v: number): this;
    height(): number;
    x(v: number): this;
    x(): number;
    y(v: number): this;
    y(): number;
    x2(digit?: number): number;
    y2(digit?: number): number;
    pos(p: {
        x: number;
        y: number;
    }): this;
    pos(x: number, y: number): this;
    pos(): {
        x: number;
        y: number;
    };
    visible(v: boolean): this;
    visible(): boolean;
    draggable(flg?: boolean): this;
    offsetX(v: number, convert?: boolean): this;
    offsetY(v: number, convert?: boolean): this;
    offset(x: number, y: number, convert?: boolean): this;
    destroy(): void;
    on(evtStr: string, cb: (e: this) => void): this;
    off(evtStr: string): this;
    opacity(v: number): this;
    rotation(v: number): this;
}
//# sourceMappingURL=Node.d.ts.map