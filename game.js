const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

ctx.scale(4, 4);

ctx.fillStyle = "#000000";

ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "#00aaff";

// ctx.fillRect(0, 0, 320, 20);

const spr = [
  [0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 0, 1],
  [0, 1, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0],
  [1, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 0, 0]
];

let px = 20;
let py = 40;

function drawSprite(sprite, x, y, col) {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      if (sprite[row][col]) ctx.fillRect(x + col, y + row, 1, 1);
    }
  }
}

drawSprite(spr, px, py);
