class Walls {
  constructor() {
    this.blocks = [
      { x: 10, y: 0, symbol: "+" },
      { x: 30, y: 0, symbol: "-" },

      { x: 10, y: 29, symbol: "*" },
      { x: 30, y: 29, symbol: "/" },

      { x: 0, y: 10, symbol: "log" },
      { x: 0, y: 20, symbol: "sqrt" },

      { x: 39, y: 10, symbol: "^" },
      { x: 39, y: 20, symbol: "=" },
    ];
  }

  draw(ctx) {
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 16px Arial";

    this.blocks.forEach((block) => {
      ctx.fillStyle = "red";
      ctx.fillRect(block.x * 20, block.y * 20, 20, 20);
      ctx.fillStyle = "white";
      ctx.fillText(block.symbol, block.x * 20 + 10, block.y * 20 + 10);
    });
  }
}
