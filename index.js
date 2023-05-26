const gridContainer = document.querySelector(".grid");

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);
  }
}
