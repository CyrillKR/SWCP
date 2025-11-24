export default class Toolbar {
  constructor() {
    this.tool = "circle"; // circle/square
    this.color = "#000000";
    this.secondaryColor = "#000000";
    this.shapeSize = 20;
    this.lineWidth = 1;
    this.fill = true;
  }

  setTool(tool) {
    this.tool = tool;
  }

  getTool() {
    return this.tool;
  }

  setColor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  setSecondaryColor(color) {
    this.secondaryColor = color;
  }

  getSecondaryColor() {
    return this.secondaryColor;
  }

  setSize(size) {
    this.shapeSize = size;
  }

  getSize() {
    return this.shapeSize;
  }

  setLineWidth(width) {
    this.lineWidth = width;
  }

  getLineWidth() {
    return this.lineWidth;
  }

  setFill(state) {
    this.fill = state;
  }

  getFill() {
    return this.fill;
  }
}
