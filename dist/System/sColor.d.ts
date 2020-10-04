/******************************************************************************
 * 色システム
 *
 * モードに対応した色の管理と、モード値をセッション経由で管理する。
 *****************************************************************************/
interface IColorTable {
    backGround: string;
    axisXY: string;
    grid: string;
    main: string;
    text: string;
    red: string;
    green: string;
    yellow: string;
    gray: string;
}
declare class sColor implements IColorTable {
    get backGround(): string;
    set backGround(c: string);
    get axisXY(): string;
    set axisXY(c: string);
    get grid(): string;
    set grid(c: string);
    get main(): string;
    set main(c: string);
    get text(): string;
    set text(c: string);
    get red(): string;
    set red(c: string);
    get green(): string;
    set green(c: string);
    get yellow(): string;
    set yellow(c: string);
    get gray(): string;
    set gray(c: string);
    /** dark color table */
    private table;
}
declare const system: sColor;
export default system;
//# sourceMappingURL=sColor.d.ts.map