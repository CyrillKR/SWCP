export default class Circle {
  constructor(ctx, x, y, r) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.r = r;
    this.beginAngle = 0;
    this.endAngle = 2 * Math.PI;
  }

  draw(color) {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, this.beginAngle, this.endAngle);
    this.ctx.fillStyle = color;
    this.ctx.stroke();
    this.ctx.fill();
  }
}
