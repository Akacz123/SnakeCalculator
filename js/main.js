const canvas = document.getElementById("gameBoard");
const ctx = canvas.getContext("2d");
canvas.height = 600;
canvas.width = 800;

const eqText = document.getElementById("eqText");

let equation = "";

const snake = new Snake({ x: 20, y: 15 });
const walls = new Walls();
const digits = [];

for (let i = 0; i < 10; i++) {
  digits.push(new Digit(i));
}

function gameLoop() {
  setTimeout(() => {
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    snake.update();

    const head = snake.body[0];

    digits.forEach((digit) => {
      if (head.x === digit.x && head.y === digit.y) {
        equation += digit.value;
        digit.x = Math.floor(Math.random() * 38) + 1;
        digit.y = Math.floor(Math.random() * 28) + 1;
      }
    });

    const hitActionWall = walls.blocks.find(
      (w) => w.x === head.x && w.y === head.y,
    );

    if (hitActionWall) {
      performAction(hitActionWall.symbol);
      snake.body = [{ x: 20, y: 15 }];
      snake.direction = { x: 0, y: 0 };
    }

    if (head.x < 0 || head.x >= 40 || head.y < 0 || head.y >= 30) {
      equation = equation.slice(0, -1);

      if (head.x < 0) head.x = 39;
      if (head.x >= 40) head.x = 0;
      if (head.y < 0) head.y = 29;
      if (head.y >= 30) head.y = 0;
    }

    eqText.innerText = equation || "0";

    walls.draw(ctx);
    snake.draw(ctx);
    digits.forEach((d) => d.draw(ctx));

    requestAnimationFrame(gameLoop);
  }, 100);
}

function performAction(symbol) {
  if (equation === "") return;

  try {
    if (symbol === "=") {
      let toEval = equation.replace(/\^/g, "**");
      let result = eval(toEval);
      if (!Number.isInteger(result)) result = result.toFixed(2);
      equation = result.toString();
    } else if (symbol === "sqrt") {
      let val = parseFloat(equation);
      equation = Math.sqrt(val).toFixed(2).toString();
    } else if (symbol === "log") {
      let val = parseFloat(equation);
      equation = Math.log10(val).toFixed(2).toString();
    } else {
      const lastChar = equation.slice(-1);
      if (!isNaN(lastChar)) {
        equation += symbol;
      }
    }
  } catch (e) {
    equation = "Error";
    setTimeout(() => (equation = ""), 1000);
  }
}

gameLoop();

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      if (snake.direction.y !== 1) snake.direction = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (snake.direction.y !== -1) snake.direction = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (snake.direction.x !== 1) snake.direction = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (snake.direction.x !== -1) snake.direction = { x: 1, y: 0 };
      break;
  }
});
