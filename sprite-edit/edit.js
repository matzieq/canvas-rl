const tiles = document.querySelectorAll(".tile");
const rows = document.querySelectorAll(".row");

const tileContainer = document.querySelector(".tile-container");
const outputContainer = document.querySelector(".output");

const copyButton = document.querySelector("#copy");
const deleteButton = document.querySelector("#delete");

outputContainer.innerText = generateSpriteArray();

let isDrawing = false;
let isErasing = false;

document.addEventListener("mousedown", e => {
  isDrawing = true;
  isErasing = e.target.classList.contains("filled");
  e.target.classList.toggle("filled");
});
document.addEventListener("mouseup", () => {
  isDrawing = false;
  isErasing = false;
});

tiles.forEach(tile =>
  tile.addEventListener("mouseover", e => {
    if (isDrawing) {
      if (isErasing) {
        e.target.classList.remove("filled");
      } else {
        e.target.classList.add("filled");
      }

      outputContainer.innerText = generateSpriteArray();
    }
  })
);

copyButton.addEventListener("click", copyToClipboard);
deleteButton.addEventListener("click", clearImage);

function generateSpriteArray() {
  const output = Array.from(rows).map(row => {
    const rowTiles = row.querySelectorAll(".tile");
    return Array.from(rowTiles).map(tile =>
      tile.classList.contains("filled") ? 1 : 0
    );
  });

  return output.map(row => `\n[${row.map(col => `${col}`)}]`);
}

function copyToClipboard() {
  const range = document.createRange();
  const sel = window.getSelection();

  range.selectNodeContents(outputContainer);
  sel.removeAllRanges();
  sel.addRange(range);
  document.execCommand("copy");
}

function clearImage() {
  tiles.forEach(tile => tile.classList.remove("filled"));
  outputContainer.innerText = generateSpriteArray();
}
