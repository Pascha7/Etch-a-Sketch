let isMouseDown = false; // Track the mouse button state
let gridNum = 16; // Defines the number of grid squares
let selectedColor = "black"; // Defines the color selected with color picker

// Select the grid container element
const gridContainer = document.querySelector(".grid");

// Create the grid of squares
for (let i = 0; i < gridNum; i++) {
  for (let j = 0; j < gridNum; j++) {
    // Create a square element
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);
  }
}

// Get all the square elements
const squares = document.querySelectorAll(`.grid-item`);
squares.forEach((square) => {
  // Event listener for when the mouse button is pressed down on a square
  square.addEventListener(`mousedown`, () => {
    isMouseDown = true; // Set the mouse button state to down
    square.style.backgroundColor = `${selectedColor}`; // Change the color of the square to blue
  });

  // Event listener for when the mouse is moved over a square
  square.addEventListener(`mousemove`, () => {
    if (isMouseDown) {
      // If the mouse button is held down, change the color of the square to blue
      square.style.backgroundColor = `${selectedColor}`;
    }
  });

  // Event listener for when the mouse button is released
  square.addEventListener(`mouseup`, () => {
    isMouseDown = false; // Reset the mouse button state to up
  });
});

// Select the resetBtn element
const resetBtn = document.getElementById(`resetBtn`);
// Resets the whole grid to white
resetBtn.onclick = function () {
  // Accesses all the square elements
  squares.forEach((square) => {
    square.style.backgroundColor = "#fff";
  });
};

// Select the colorPicker element
const colorPicker = document.getElementById(`colorPicker`);
// Changes pen color
colorPicker.addEventListener(`input`, function (e) {
  // Assigns the new color
  selectedColor = e.target.value;
});
