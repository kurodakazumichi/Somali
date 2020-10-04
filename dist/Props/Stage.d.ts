/******************************************************************************
 * Konva.Stageに該当するクラス
 *****************************************************************************/
import Konva from "konva";
export interface IConfig {
    container: HTMLDivElement | null;
    width: number;
    height: number;
}
export default class Stage {
    /** Container */
    private container;
    /** Stage */
    private stage;
    /** Config */
    private config;
    init(config: IConfig): void;
    add(layer: Konva.Layer): void;
    /**
     * Konva.Stageで生成されるCanvasと同じサイズにする。
     * Canvasの方には背景色が設定できないっぽいので、コンテナの背景色を設定する。
     */
    private createContainer;
    /** Konva.Stageの生成 */
    private createStage;
}
//# sourceMappingURL=Stage.d.ts.map