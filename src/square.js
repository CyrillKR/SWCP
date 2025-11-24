export default class Square {
  constructor(ctx, x, y, length) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.length = length;
  }

  draw(color, secondaryColor, fill, lineWidth) {
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.lineWidth = lineWidth;
    this.ctx.strokeStyle = secondaryColor;
    this.ctx.moveTo(this.x - this.length / 2, this.y - this.length / 2);
    this.ctx.lineTo(this.x - this.length / 2, this.y + this.length / 2);
    this.ctx.lineTo(this.x + this.length / 2, this.y + this.length / 2);
    this.ctx.lineTo(this.x + this.length / 2, this.y - this.length / 2);
    this.ctx.closePath();
    this.ctx.stroke();
    if (fill) {
      this.ctx.fill();
    }
  }
}
