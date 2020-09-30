/******************************************************************************
 * Konva.Stageに該当するクラス
 *****************************************************************************/
import Konva from "konva";

//-----------------------------------------------------------------------------
// Stage.initに渡す設定
//-----------------------------------------------------------------------------
export interface IConfig {
  id:string,
  width:number;
  height:number;
  bgColor:string;
}

//-----------------------------------------------------------------------------
// Stage.initに渡す設定
//-----------------------------------------------------------------------------
export default class Stage
{
  //---------------------------------------------------------------------------
  // data
  //---------------------------------------------------------------------------
  /** Container */
  private container:HTMLDivElement|null = null;
  
  /** Stage */
  private stage:Konva.Stage|null = null;

  /** Config */
  private config:IConfig|null = null;

  //---------------------------------------------------------------------------
  // 初期化
  //---------------------------------------------------------------------------  
  init(config:IConfig) 
  {
    this.config    = config;
    this.container = this.createContainer();
    this.stage     = this.createStage();
  }

  add(layer:Konva.Layer) {
    this.stage?.add(layer);
  }

  //---------------------------------------------------------------------------
  // private メソッド
  //---------------------------------------------------------------------------
  
  /** 
   * Konva.Stageで生成されるCanvasと同じサイズにする。
   * Canvasの方には背景色が設定できないっぽいので、コンテナの背景色を設定する。
   */
  private createContainer() 
  {
    if (!this.config) return null;

    const { id, width, height, bgColor } = this.config;

    const container = document.getElementById(id) as HTMLDivElement;

    container.style.backgroundColor = bgColor;
    container.style.width  = `${width}px`;
    container.style.height = `${height}px`;

    return container;
  }

  /** Konva.Stageの生成 */
  private createStage() {

    if (!this.config) return null;
    if (!this.container) return null;

    return new Konva.Stage({
      container: this.container,
      width    : this.config.width,
      height   : this.config.height
    })
  }
}

