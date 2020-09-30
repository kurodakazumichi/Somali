/******************************************************************************
 * 色システム
 * 
 * モードに対応した色の管理と、モード値をセッション経由で管理する。
 *****************************************************************************/
interface IColorTable 
{
  backGround:string;
  axisXY:string;
  grid:string;
  main:string;
  text:string;
  red:string;
  green:string;
  yellow:string;
  gray:string;
}

class sColor implements IColorTable
{
  get backGround() { return this.table.backGround; }
  set backGround(c){ this.table.backGround = c; }
  get axisXY()     { return this.table.axisXY; }
  set axisXY(c)    { this.table.axisXY = c; }
  get grid()       { return this.table.grid; }
  set grid(c)      { this.table.grid = c; }
  get main()       { return this.table.main; }
  set main(c)      { this.table.main = c; }
  get text()       { return this.table.text; }
  set text(c)      { this.table.text = c; }
  get red()        { return this.table.red; }
  set red(c)       { this.table.red = c; }
  get green()      { return this.table.green; }
  set green(c)     { this.table.green = c; }
  get yellow()     { return this.table.yellow; }
  set yellow(c)    { this.table.yellow = c; }
  get gray()       { return this.table.gray; }
  set gray(c)      { this.table.gray = c; }

  /** dark color table */
  private table:IColorTable = {
    backGround: "#1C1C1C",
    axisXY    : "#FFFFFF",
    grid      : "#3C3C3C",
    main      : "#FFFFFF",
    red       : "#CA3C6E",
    green     : "#40BFB0",
    yellow    : "#EDAD0B",
    text      : "#FFFFFF",
    gray      : "#AAAAAA",
  }  
}

const system = new sColor();
export default system;