class Digit {
  constructor(val) {
    this.x = Math.floor(Math.random() * 40);
    this.y = Math.floor(Math.random() * 30);
    this.value = val;
  }

  draw(ctx) {
    ctx.fillStyle = "yellow";
    ctx.font = "20px Arial";
    ctx.fillText(this.value, this.x * 20 + 5, this.y * 20 + 18);
  }
}
