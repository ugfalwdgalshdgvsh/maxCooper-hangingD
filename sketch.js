const BLANKSPACE = "blank-space";
const CIRCLE = "circle";
const SEMICIRCLE1 = "semi-circle-1";
const SEMICIRCLE2 = "semi-circle-2";
const SEMICIRCLE3 = "semi-circle-3";
const SEMICIRCLE4 = "semi-circle-4";
const SEMICIRCLE1_DOUBLE = "semi-circle-1-double";
const SEMICIRCLE2_DOUBLE = "semi-circle-2-double";
const SEMICIRCLE3_DOUBLE = "semi-circle-3-double";
const SEMICIRCLE4_DOUBLE = "semi-circle-4-double";
const SQUARE = "square";
const QUAD = "quad"
const TRIANGLE1 = "triangle";
const TRIANGLE2 = "triangle-2";
const TRIANGLE3 = "triangle-3";
const TRIANGLE4 = "triangle-4";

const cellShape = [BLANKSPACE, CIRCLE, CIRCLE, CIRCLE, CIRCLE, CIRCLE, SEMICIRCLE1, SEMICIRCLE2, SEMICIRCLE3, SEMICIRCLE4, SEMICIRCLE1_DOUBLE, SEMICIRCLE2_DOUBLE, SEMICIRCLE3_DOUBLE, SEMICIRCLE4_DOUBLE, SQUARE, QUAD, TRIANGLE1, TRIANGLE2, TRIANGLE3, TRIANGLE4];

const canvasSize = 800;
const cellCount = 25;
const cellSize = canvasSize / cellCount;
// const possibleCellSizes = [cellSize, cellSize, cellSize * 2, cellSize/2, cellSize/2]

// ---

function setup() {

  createCanvas(canvasSize, canvasSize);

  // noLoop();

  frameRate(random(4, 12));

}

function draw() {

  background(0);

  // create the grid with nested "for" loops

  for (let row = 0; row < cellCount; row++) {
    for (let column = 0; column < cellCount; column++) {

      const xPosition = row * cellSize;
      const yPosition = column * cellSize;

      const width = cellSize;
      const height = cellSize;

      noStroke();

      // 25% likely to be white

      const white = random(0, 1);

      if (0.25 > white) {
        fill(255)
      } else {
        fill(random(255), random(255), random(255));
      }

      // create shapes

      const shapeType = random(cellShape);

      if (shapeType == CIRCLE) {
        circle(xPosition + cellSize/2, yPosition + cellSize/2, width, height);
      }

      if (shapeType == SEMICIRCLE1) {
        arc(xPosition + cellSize/2, yPosition + cellSize/2, width, height, HALF_PI, PI + HALF_PI);
      }

      if (shapeType == SEMICIRCLE2) {
        arc(xPosition + cellSize/2, yPosition + cellSize/2, width, height, PI + HALF_PI, HALF_PI);
      }

      if (shapeType == SEMICIRCLE3) {
        arc(xPosition + cellSize/2, yPosition + cellSize/2, width, height, 0, HALF_PI + HALF_PI);
      }

      if (shapeType == SEMICIRCLE4) {
        arc(xPosition + cellSize/2, yPosition + cellSize/2, width, height, HALF_PI + HALF_PI, 0);
      }

      if (shapeType == SEMICIRCLE1_DOUBLE) {
        arc(xPosition + cellSize/2, yPosition + cellSize/2,width, height, HALF_PI, PI + HALF_PI);
        arc(xPosition + cellSize, yPosition + cellSize/2, width, height, HALF_PI, PI + HALF_PI);
      }

      if (shapeType == SEMICIRCLE2_DOUBLE) {
        arc(xPosition + cellSize/2, yPosition + cellSize/2, width, height, PI + HALF_PI, HALF_PI);
        arc(xPosition, yPosition + cellSize/2, width, height, PI + HALF_PI, HALF_PI);
      }

      if (shapeType == SEMICIRCLE3_DOUBLE) {
        arc(xPosition + cellSize/2, yPosition + cellSize/2, width, height, 0, HALF_PI + HALF_PI);
        arc(xPosition + cellSize/2, yPosition, width, height, 0, HALF_PI + HALF_PI);
      }

      if (shapeType == SEMICIRCLE4_DOUBLE) {
        arc(xPosition + cellSize/2, yPosition + cellSize/2, width, height, HALF_PI + HALF_PI, 0);
        arc(xPosition + cellSize/2, yPosition + cellSize, width, height, HALF_PI + HALF_PI, 0);
      }

      if (shapeType == SQUARE) {
        rect(xPosition, yPosition, width, height);
      }

      if (shapeType == QUAD) {
        quad(xPosition + cellSize/2, yPosition,
             xPosition + cellSize, yPosition + cellSize/2,
             xPosition + cellSize/2, yPosition + cellSize,
             xPosition, yPosition + cellSize/2)
      }

      if (shapeType == TRIANGLE1) {
        triangle(xPosition + cellSize/2, yPosition, xPosition + cellSize, yPosition + cellSize, xPosition, yPosition + cellSize);
      }

      if (shapeType == TRIANGLE2) {
        triangle(xPosition, yPosition, xPosition + cellSize, yPosition, xPosition + cellSize/2, yPosition + cellSize);
      }

      if (shapeType == TRIANGLE3) {
        triangle(xPosition, yPosition, xPosition + cellSize, yPosition + cellSize/2, xPosition, yPosition + cellSize);
      }

      if (shapeType == TRIANGLE4) {
        triangle(xPosition + cellSize, yPosition, xPosition + cellSize, yPosition + cellSize, xPosition, yPosition + cellSize/2);
      }

    }
  }
}

// ---

// click the canvas to regenerate sketch

const button = document.getElementById("reset-sketch");

button.addEventListener("click", function() {

  redraw();
  frameRate(random(4, 12));

});
