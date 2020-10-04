import Node from '../Node';
/******************************************************************************
 * Konva.Shapeのプロパティを再定義するためのNode基底クラス
 *****************************************************************************/
export default abstract class Shape extends Node {
    fill(color: string): this;
    stroke(color: string): this;
    strokeWidth(width: number, convert?: boolean): this;
    dash(width: number): this;
    radius(radius: number): this;
}
//# sourceMappingURL=Shape.d.ts.map