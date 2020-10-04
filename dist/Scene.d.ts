import { GUI } from 'dat.gui';
import Coord from './Props/Coord';
import Stage from './Props/Stage';
import Shapes from './Props/Shapes';
import Groups from './Props/Groups';
import Node from './Node/Node';
export interface IConfig {
    id: string;
    width: number;
    height: number;
    unit: number;
    gui: boolean;
    update: boolean;
}
export interface IOption {
    id: string;
    width?: number;
    height?: number;
    unit?: number;
    gui?: boolean;
    update?: boolean;
}
export default class Scene {
    /** 小道具 */
    protected props: {
        coord: Coord;
        stage: Stage;
        shapes: Shapes;
        groups: Groups;
    };
    /** Sceneが扱うDOMのリスト */
    private dom;
    /** シーンの設定 */
    private config;
    /** Konva.Layerインスタンス */
    private layer;
    /** dat.guiインスタンス */
    private _gui;
    /** グラフに表示するNodeリスト */
    private nodes;
    timer: number;
    constructor();
    build(): void;
    private initDOM;
    private initProps;
    private draw;
    private execute;
    /** Sceneのオプションオブジェクトを返す */
    get option(): IOption;
    /** グラフに表示するNodeを生成し、オブジェクトで返す */
    createNodes(shapes: Shapes, groups: Groups): {};
    /** ノードの初期化処理を記述する */
    initNodes(nodes: {
        [key: string]: Node;
    }): void;
    /** dat.guiの初期化用メソッド */
    initGui(gui: GUI): void;
    /** 毎フレーム呼ばれるメソッド、オプションでupdate:falseにすると呼ばれない */
    update(): void;
    addNodes(nodes: {
        [key: string]: Node;
    }): void;
}
//# sourceMappingURL=Scene.d.ts.map