// Select the grid container element
const gridContainer = document.querySelector(".grid");
let isMouseDown = false; // Track the mouse button state

// Create the grid of squares
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
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
    square.style.backgroundColor = "blue"; // Change the color of the square to blue
  });

  // Event listener for when the mouse is moved over a square
  square.addEventListener(`mousemove`, () => {
    if (isMouseDown) {
      // If the mouse button is held down, change the color of the square to blue
      square.style.backgroundColor = "blue";
    }
  });

  // Event listener for when the mouse button is released
  square.addEventListener(`mouseup`, () => {
    isMouseDown = false; // Reset the mouse button state to up
  });
});
