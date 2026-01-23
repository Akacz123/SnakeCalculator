class Snake {
  constructor(start) {
    this.body = [start];
    this.direction = { x: 0, y: 0 };
  }

  draw(ctx) {
    ctx.fillStyle = "lime";
    this.body.forEach((segment) => {
      ctx.fillRect(segment.x * 20, segment.y * 20, 20, 20);
    });
  }
}
