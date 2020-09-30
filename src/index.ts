import Konva from 'konva';
import sCoord from './System/sCoord';

export class SceneConfig {
  public id:string = "";
  public width:number = 500;
  public height:number = 500;
  public unit:number = 50;
  public bgColor:string = "black";
}

export class Scene {
  protected system = {
    coord: new sCoord()
  }
  constructor(config:SceneConfig) {

    const container = document.getElementById(config.id);
    
    if (container) {
      container.style.background = config.bgColor;
      container.style.width = `${config.width}px`;
      container.style.height = `${config.height}px`;
    }

    this.system.coord.init(config.width, config.height, config.unit);

    const stage = new Konva.Stage({
      container: config.id,
      width:config.width,
      height:config.height,
    });

    const layer = new Konva.Layer();

    const rect = new Konva.Rect({
      x:this.system.coord.x(0),
      y: this.system.coord.y(0),
      width: this.system.coord.u2px(1),
      height:-this.system.coord.u2px(2),
      fill:"red"
    })
    layer.add(rect);
    stage.add(layer);

  }
}