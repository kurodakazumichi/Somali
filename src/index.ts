import Konva from 'konva';
import Coord from './Component/Coord';
import Stage from './Component/Stage';

export class SceneConfig {
  public id:string = "";
  public width:number = 500;
  public height:number = 500;
  public unit:number = 50;
  public bgColor:string = "black";
}

export class Scene {
  protected components = {
    coord: new Coord(),
    stage: new Stage(),
  }

  constructor(config:SceneConfig) {

    this.components.stage.init(config);
    this.components.coord.init(config.width, config.height, config.unit);

    const layer = new Konva.Layer();

    const rect = new Konva.Rect({
      x:this.components.coord.x(0),
      y: this.components.coord.y(0),
      width: this.components.coord.u2px(1),
      height:-this.components.coord.u2px(2),
      fill:"red"
    });

    layer.add(rect);
    this.components.stage.add(layer);

  }
}