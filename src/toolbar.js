export default class Toolbar {
  constructor() {
    this.tool = "circle";
    this.color = "#000000";
    this.size = 20;
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

  setSize(size) {
    this.size = size;
  }

  getSize() {
    return this.size;
  }
}
