export default class Cursor {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.isDragging = false;
  }

  setCoordinates(x, y) {
    this.x = x;
    this.y = y;
  }

  getCoordinates() {
    return { x: this.x, y: this.y };
  }

  setDragging(state) {
    this.isDragging = state;
  }

  getDrag() {
    return this.isDragging;
  }
}
