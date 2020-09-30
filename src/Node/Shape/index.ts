import Konva from 'konva';
import Shape from './Shape';

/******************************************************************************
 * 基本の形状クラスを定義
 *****************************************************************************/

//-----------------------------------------------------------------------------
// Circle
//-----------------------------------------------------------------------------
export class Circle extends Shape 
{
  protected createNode() {
    return new Konva.Circle();
  }
}

//-----------------------------------------------------------------------------
// Rect
//-----------------------------------------------------------------------------
export class Rect extends Shape 
{
  protected createNode() {
    return new Konva.Rect();
  }
}

//-----------------------------------------------------------------------------
// Line
//-----------------------------------------------------------------------------
export class Line extends Shape 
{
  protected createNode() {
    return new Konva.Line();
  }

  private get shape() {
    return this.node as Konva.Line;
  }

  points(points:number[]) {
    this.shape.setAttr("points", this.coord.points(points)); return this;
  }

  closed(v:boolean) {
    this.shape.closed(v); return this;
  }
}

//-----------------------------------------------------------------------------
// Arrow
//-----------------------------------------------------------------------------
export class Arrow extends Shape 
{
  protected createNode() {
    return new Konva.Arrow();
  }

  private get shape() {
    return this.node as Konva.Arrow;
  }

  points(points:number[]) {
    this.shape.setAttr("points", this.coord.points(points)); return this;
  }
  pointerLength(v:number) {
    this.shape.pointerLength(this.coord.u2px(v)); return this;
  }
  pointerWidth(v:number) {
    this.shape.pointerWidth(this.coord.u2px(v)); return this;
  }
  color(v:string) {
    return this.fill(v).stroke(v);
  }
}

//-----------------------------------------------------------------------------
// Star
//-----------------------------------------------------------------------------
export class Star extends Shape 
{
  protected createNode() {
    return new Konva.Star();
  }

  private get shape() {
    return this.node as Konva.Star;
  }

  numPoints(v:number) {
    this.shape.numPoints(v); return this;
  }
  innerRadius(v:number) {
    this.shape.innerRadius(this.coord.u2px(v)); return  this;
  }
  outerRadius(v:number) {
    this.shape.outerRadius(this.coord.u2px(v)); return this;
  }
}

//-----------------------------------------------------------------------------
// Wedge
//-----------------------------------------------------------------------------
export class Wedge extends Shape
{
  protected createNode() {
    return new Konva.Wedge();
  }

  private get shape() {
    return this.node as Konva.Wedge;
  }

  angle(v:number) {
    this.shape.angle(v); return this;
  }
  clockwise(v:boolean) {
    this.shape.clockwise(v); return this;
  }
}

//-----------------------------------------------------------------------------
// Text
//-----------------------------------------------------------------------------
export class Text extends Shape 
{
  protected createNode() {
    return new Konva.Text();
  }

  private get shape() {
    return this.node as Konva.Text;
  }

  text(v:string) {
    this.shape.text(v); return this;
  }
  fontSize(v:number) {
    this.shape.fontSize(v); return this;
  }
  fontFamily(v:string) {
    this.shape.fontFamily(v); return this;
  }
  fontStyle(v:string) {
    this.shape.fontStyle(v); return this;
  }
  align(v:string) {
    this.shape.align(v); return this;
  }
  verticalAlign(v:string) {
    this.shape.verticalAlign(v); return this;
  }

  normal() { this.fontStyle("normal"); return this; }
  italic() { this.fontStyle("italic"); return this; }
  bold()   { this.fontStyle("bold"); return this; }  
}