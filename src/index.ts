import Konva from 'konva';
import sCoord from './System/sCoord';
import sStage from './System/sStage';

export class SceneConfig {
  public id:string = "";
  public width:number = 500;
  public height:number = 500;
  public unit:number = 50;
  public bgColor:string = "black";
}

export class Scene {
  protected system = {
    coord: new sCoord(),
    stage: new sStage(),
  }

  constructor(config:SceneConfig) {

    
    this.system.stage.init(config);


    this.system.coord.init(config.width, config.height, config.unit);

    const layer = new Konva.Layer();

    const rect = new Konva.Rect({
      x:this.system.coord.x(0),
      y: this.system.coord.y(0),
      width: this.system.coord.u2px(1),
      height:-this.system.coord.u2px(2),
      fill:"red"
    });

    layer.add(rect);
    this.system.stage.add(layer);

  }
}