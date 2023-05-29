let isMouseDown = false; // Track the mouse button state
let gridNum = 16; // Defines the number of grid squares
let selectedColor = "black"; // Defines the color selected with color picker
let rainbowMode = false; // Enables rainbowMode

// Select the grid container element
const gridContainer = document.querySelector(".grid");

// Function to create the grid of squares
function createGrid() {
  // Clear the existing grid
  gridContainer.innerHTML = "";

  // Create the grid of squares
  for (let i = 0; i < gridNum; i++) {
    for (let j = 0; j < gridNum; j++) {
      // Create a square element
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridContainer.appendChild(gridItem);

      // Event listener for when the mouse button is pressed down on a square
      gridItem.addEventListener(`mousedown`, () => {
        isMouseDown = true; // Set the mouse button state to down
        gridItem.style.backgroundColor = selectedColor; // Change the color of the square to the selected color
      });

      // Event listener for when the mouse is moved over a square
      gridItem.addEventListener(`mousemove`, () => {
        if (isMouseDown) {
          // If the mouse button is held down, change the color of the square to the selected color
          gridItem.style.backgroundColor = selectedColor;
        }
      });

      // Event listener for when the mouse button is released
      gridItem.addEventListener(`mouseup`, () => {
        isMouseDown = false; // Reset the mouse button state to up
      });

      // Rainbow color mode

      const rainbowBtn = document.getElementById(`rainbowBtn`);

      // Event listener for when the rainbow button is clicked
      rainbowBtn.addEventListener(`mousedown`, function () {
        rainbowMode = true;
        selectedColor = getRandomRainbowColor();
      });

      // Event listener for when the mouse is moved over the grid
      gridContainer.addEventListener(`mousemove`, function () {
        if (rainbowMode) {
          selectedColor = getRandomRainbowColor();
        }
      });

      // Function to get a random color from the rainbowColors array
      function getRandomRainbowColor() {
        const index = Math.floor(Math.random() * rainbowColors.length);
        return rainbowColors[index];
      }
    }
  }
}

// Call the createGrid function initially to set up the grid
createGrid();

// Select the resetBtn element
const resetBtn = document.getElementById(`resetBtn`);
// Resets the grid
resetBtn.addEventListener(`click`, function () {
  // creates the new grid
  createGrid();
});

// Select the colorPicker element
const colorPicker = document.getElementById(`colorPicker`);
// Changes pen color
colorPicker.addEventListener(`input`, function (e) {
  // Assigns the new color
  selectedColor = e.target.value;
  // Disables rainbowMode if selecting color
  rainbowMode = false;
});

// Selects the slider
const slider = document.getElementById(`slider`);
// Selects the sliderValue
const sliderValue = document.getElementById(`sliderValue`);
// Actual slider Value is synced with sliderValue span
slider.addEventListener(`input`, function (e) {
  let value = +e.target.value;
  sliderValue.textContent = value;
  // Enables live value updates for slider value
  sliderValue.innerHTML = `<span>${value}</span> x <span>${value}</span>`;
  gridNum = value;
  createGrid();
  gridContainer.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${value}, 1fr)`;
});

const rainbowColors = [
  "#ff0000", // Red
  "#ff7f00", // Orange
  "#ffff00", // Yellow
  "#00ff00", // Green
  "#0000ff", // Blue
  "#4b0082", // Indigo
  "#9400d3", // Violet
];
