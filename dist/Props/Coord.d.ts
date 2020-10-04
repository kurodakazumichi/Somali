/******************************************************************************
 * 座標系を管理するシステム
 *
 * canvasは左上を起点とした座標型だが、扱いにくいので
 * canvasの中心を原点とした独自座標系への変換やpx座標への逆変換などを扱う
 *****************************************************************************/
export default class Coord {
    private _width;
    private _halfWidth;
    private _height;
    private _halfHeight;
    private _unit;
    /** 独自座標における一番上の座標値 */
    private _top;
    /** 独自座標における一番下の座標値 */
    private _down;
    /** 独自座標における左端 */
    private _left;
    /** 独自座標における右端 */
    private _right;
    init(width: number, height: number, unit: number): void;
    get w(): number;
    get h(): number;
    get top(): number;
    get down(): number;
    get left(): number;
    get right(): number;
    get unit(): number;
    /** 幅(unit) */
    get uw(): number;
    /** 高さ(unit) */
    get uh(): number;
    /** 1ユニットあたりのピクセル数を設定 */
    setUnit(unit: number): void;
    u2px(_u: number): number;
    x(_ux: number): number;
    y(_uy: number): number;
    xy(_ux: number, _uy: number): {
        x: number;
        y: number;
    };
    points(nums: number[]): number[];
    px2u(px: number): number;
    ux(x: number): number;
    uy(y: number): number;
    /** canvasの半分のサイズを計算 */
    private calcHalf;
    /** 上下左右を再計算 */
    private calcUpDownLeftRight;
}
//# sourceMappingURL=Coord.d.ts.map