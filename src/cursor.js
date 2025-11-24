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

  toggleDrag() {
    this.isDragging = !this.isDragging;
  }

  getDrag() {
    return this.isDragging;
  }
}
