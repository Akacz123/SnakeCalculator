const canvas = document.getElementById("gameBoard");
const ctx = canvas.getContext("2d");
canvas.height = 600;
canvas.width = 800;

const snake = new Snake({ x: 10, y: 10 });

function gameLoop() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  snake.draw(ctx);
  requestAnimationFrame(gameLoop);
  snake.update();
}
gameLoop();
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
