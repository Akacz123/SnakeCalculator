const canvas = document.getElementById("gameBoard");
const ctx = canvas.getContext("2d");
canvas.height = 600;
canvas.width = 800;

function gameLoop() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(gameLoop);
}
gameLoop();
