import Shape from './Shape';
/******************************************************************************
 * 基本の形状クラスを定義
 *****************************************************************************/
export declare class Circle extends Shape {
    protected createNode(): import("konva/types/shapes/Circle").Circle;
}
export declare class Rect extends Shape {
    protected createNode(): import("konva/types/shapes/Rect").Rect;
}
export declare class Ellipse extends Shape {
    protected createNode(): import("konva/types/shapes/Ellipse").Ellipse;
    private get shape();
    rx(r: number): this;
    ry(r: number): this;
}
export declare class Line extends Shape {
    protected createNode(): import("konva/types/shapes/Line").Line<import("konva/types/shapes/Line").LineConfig>;
    private get shape();
    points(points: number[]): this;
    closed(v: boolean): this;
    lineCap(cap: string): this;
    lineJoin(join: string): this;
}
export declare class Arrow extends Shape {
    protected createNode(): import("konva/types/shapes/Arrow").Arrow;
    private get shape();
    points(points: number[]): this;
    pointerLength(v: number): this;
    pointerWidth(v: number): this;
    color(v: string): this;
    lineCap(cap: string): this;
    lineJoin(join: string): this;
}
export declare class Star extends Shape {
    protected createNode(): import("konva/types/shapes/Star").Star;
    private get shape();
    numPoints(v: number): this;
    innerRadius(v: number): this;
    outerRadius(v: number): this;
}
export declare class Wedge extends Shape {
    protected createNode(): import("konva/types/shapes/Wedge").Wedge;
    private get shape();
    angle(v: number): this;
    clockwise(v: boolean): this;
}
export declare class Text extends Shape {
    protected createNode(): import("konva/types/shapes/Text").Text;
    private get shape();
    text(v: string): this;
    fontSize(v: number): this;
    fontFamily(v: string): this;
    fontStyle(v: string): this;
    align(v: string): this;
    verticalAlign(v: string): this;
    normal(): this;
    italic(): this;
    bold(): this;
}
//# sourceMappingURL=index.d.ts.map