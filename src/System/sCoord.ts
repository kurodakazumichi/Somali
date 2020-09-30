/******************************************************************************
 * 座標系を管理するシステム
 * 
 * canvasは左上を起点とした座標型だが、扱いにくいので
 * canvasの中心を原点とした独自座標系への変換やpx座標への逆変換などを扱う
 *****************************************************************************/
export default class sCoord 
{
  //---------------------------------------------------------------------------
  // 扱うデータ
  //---------------------------------------------------------------------------

  // canvasの幅px
  private _width:number = 0;

  // canvasの1/2の幅px
  private _halfWidth:number = 0;

  // canvasの高さpx
  private _height:number = 0;

  // canvasの1/2の高さpx
  private _halfHeight:number = 0;

  // 1単位当たりのピクセル数、例えばunitに100が設定されていた場合
  // 1=100pxとして計算される
  private _unit:number = 0;

  /** 独自座標における一番上の座標値 */
  private _top:number = 0;

  /** 独自座標における一番下の座標値 */
  private _down:number = 0;

  /** 独自座標における左端 */
  private _left:number = 0;

  /** 独自座標における右端 */
  private _right:number = 0;  

  //---------------------------------------------------------------------------
  // 初期化
  //---------------------------------------------------------------------------  
  init(width:number, height:number, unit:number) 
  {
    this._width  = width;
    this._height = height;
    this._unit   = unit;

    this.calcHalf();    
    this.calcUpDownLeftRight();
  }

  //---------------------------------------------------------------------------
  // Public プロパティ
  //---------------------------------------------------------------------------    
  get w()     { return this._width; }
  get h()     { return this._height; }
  get top()   { return this._top; }
  get down()  { return this._down; }
  get left()  { return this._left; }
  get right() { return this._right; }
  get unit()  { return this._unit; }

  /** 幅(unit) */
  get uw() {
    return (this.right - this.left);
  }
  /** 高さ(unit) */
  get uh() {
    return (this.top - this.down);
  }

  //---------------------------------------------------------------------------
  // unit系
  //---------------------------------------------------------------------------  
  /** 1ユニットあたりのピクセル数を設定 */
  setUnit(unit:number) {
    this._unit = unit;
    this.calcUpDownLeftRight();
  }

  //---------------------------------------------------------------------------
  // unit -> px
  u2px(_u:number) {
    return this.unit * _u;
  }
  x(_ux:number) {
    return _ux * this._unit + this._halfWidth;
  }
  y(_uy:number) {
    return -_uy * this._unit + this._halfHeight;
  }
  xy(_ux:number, _uy:number) {
    return { x:this.x(_ux), y:this.y(_uy) };
  }

  points(nums:number[]){
    return nums.map((p, i) => {
      return (i%2 === 0)? this.x(p) : this.y(p);
    });
  }

  //---------------------------------------------------------------------------
  // px -> unitへの変換
  px2u(px:number) {
    return px / this._unit;
  }
  ux(x:number) {
    return (x - this._halfWidth) / this._unit;
  }
  uy(y:number) {
    return -((y - this._halfHeight) / this._unit);
  }  

  //---------------------------------------------------------------------------
  // private メソッド
  //---------------------------------------------------------------------------  

  /** canvasの半分のサイズを計算 */ 
  private calcHalf() {
    this._halfWidth  = this._width / 2;
    this._halfHeight = this._height / 2;
  }

  /** 上下左右を再計算 */
  private calcUpDownLeftRight() {
    this._top   = this._halfHeight / this._unit;
    this._down  = -this._top;
    this._right = this._halfWidth / this._unit;
    this._left  = -this._right;
  }  

}