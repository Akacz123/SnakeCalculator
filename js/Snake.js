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

  update() {
    const head = this.body[0];
    const newHead = {
      x: head.x + this.direction.x,
      y: head.y + this.direction.y,
    };
    this.body.unshift(newHead);
    this.body.pop();
  }
}

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      snake.direction = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      snake.direction = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      snake.direction = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      snake.direction = { x: 1, y: 0 };
      break;
  }
});
