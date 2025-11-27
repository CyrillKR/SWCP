import Cursor from "./cursor.js";
import Circle from "./circle.js";
import Square from "./square.js";
import Toolbar from "./toolbar.js";

const canvas = document.querySelector("#main-screen");
const ctx = canvas.getContext("2d");

const resetBtn = document.querySelector("#reset-btn");
const circleBtn = document.querySelector("#circle-btn");
const squareBtn = document.querySelector("#square-btn");
const colorPicker = document.querySelector("#color-picker");
const secondaryColorPicker = document.querySelector("#secondary-color-picker");
const sizeSelector = document.querySelector("#shape-size-change");
const lineWidthSelector = document.querySelector("#line-width-change");
const fillCheckbox = document.querySelector("#toggle-fill");
const syncColorBtn = document.querySelector("#sync-color");

const cursor = new Cursor();
const toolbar = new Toolbar();

function clearScreen(e) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function mainCanvasLoop(e) {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  cursor.setCoordinates(x, y);

  if (cursor.getDrag()) {
    if (toolbar.getTool() == "square") {
      const square = new Square(ctx, x, y, toolbar.getSize());
      square.draw(
        toolbar.getColor(),
        toolbar.getSecondaryColor(),
        toolbar.getFill(),
        toolbar.getLineWidth()
      );
    } else if (toolbar.getTool() == "circle") {
      const circle = new Circle(ctx, x, y, toolbar.getSize());
      circle.draw(
        toolbar.getColor(),
        toolbar.getSecondaryColor(),
        toolbar.getFill(),
        toolbar.getLineWidth()
      );
    }
  }
}

function mouseClick(e) {
  cursor.setDragging();
  const coordinates = cursor.getCoordinates();

  if (toolbar.getTool() == "square") {
    const square = new Square(
      ctx,
      coordinates.x,
      coordinates.y,
      toolbar.getSize()
    );
    square.draw(
      toolbar.getColor(),
      toolbar.getSecondaryColor(),
      toolbar.getFill(),
      toolbar.getLineWidth()
    );
  } else if (toolbar.getTool() == "circle") {
    const circle = new Circle(
      ctx,
      coordinates.x,
      coordinates.y,
      toolbar.getSize()
    );
    circle.draw(
      toolbar.getColor(),
      toolbar.getSecondaryColor(),
      toolbar.getFill(),
      toolbar.getLineWidth()
    );
  }
}

function mouseRelease(e) {
  cursor.setDragging();
}

function changeColor(e) {
  const color = e.target.value;
  toolbar.setColor(color);
}

function changeSecondaryColor(e) {
  const color = e.target.value;
  toolbar.setSecondaryColor(color);
}

function syncColors(e) {
  const mainColor = toolbar.getColor();
  toolbar.setSecondaryColor(mainColor);
  secondaryColorPicker.value = mainColor;
  e.preventDefault();
}

function changeSize(e) {
  const size = e.target.value;
  toolbar.setSize(parseInt(size));
}

function changeLineWidth(e) {
  const lineWidth = e.target.value;
  toolbar.setLineWidth(parseInt(lineWidth));
}

function changeFill(e) {
  const isFilling = e.target.checked;
  toolbar.setFill(isFilling);
}

function mouseLeaveEvent(e) {
  cursor.setDragging();
}

function init() {
  clearScreen();

  resetBtn.addEventListener("click", (e) => clearScreen(e));
  circleBtn.addEventListener("click", (e) => {
    toolbar.setTool("circle");
  });
  squareBtn.addEventListener("click", (e) => {
    toolbar.setTool("square");
  });
  colorPicker.addEventListener("change", (e) => changeColor(e));
  secondaryColorPicker.addEventListener("change", (e) =>
    changeSecondaryColor(e)
  );
  sizeSelector.addEventListener("change", (e) => changeSize(e));
  lineWidthSelector.addEventListener("change", (e) => changeLineWidth(e));
  fillCheckbox.addEventListener("change", (e) => changeFill(e));
  syncColorBtn.addEventListener("click", (e) => syncColors(e));

  canvas.addEventListener("mousemove", (e) => mainCanvasLoop(e));
  canvas.addEventListener("mousedown", (e) => mouseClick(e));
  canvas.addEventListener("mouseleave", (e) => mouseLeaveEvent(e));
  document.addEventListener("mouseup", (e) => mouseRelease(e));
}

init();
