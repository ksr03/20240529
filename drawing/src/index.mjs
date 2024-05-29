import "./styles.css";

// 以下、キャンバス関連のコード
// 演習1、演習2
const canvas = document.querySelector("#draw-area");
const context = canvas.getContext("2d");
canvas.addEventListener("mousemove", (event) => {
  const rect = event.target.getBoundingClientRect();
  draw(event.layerX - rect.left, event.layerY - rect.top);
});
canvas.addEventListener("touchmove", (event) => {
  const rect = event.target.getBoundingClientRect();
  draw(event.layerX - rect.left, event.layerY - rect.top);
});

let isDrag = false;
function draw(x, y) {
  if (!isDrag) {
    return;
  }
  context.lineWidth = 5;
  context.strokeStyle = "red";
  context.lineTo(x, y);
  context.stroke();
}

// 演習3
canvas.addEventListener("mousedown", () => {
  context.beginPath();
  isDrag = true;
});

canvas.addEventListener("mouseup", () => {
  context.closePath();
  isDrag = false;
});

canvas.addEventListener("touchstart", () => {
  context.beginPath();
  isDrag = true;
});

canvas.addEventListener("touchend", () => {
  context.closePath();
  isDrag = false;
});

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});
