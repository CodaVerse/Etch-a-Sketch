// define initial grid size
let rowCount = 10;
const container = document.getElementById("container");

// Function to remove child nodes (reset the amount of squares to zero to allow re-appending)
function clearGrid(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

//encompasses 3 other functions and is run on slider commit or reset grid button
function rebuildGrid() {
  clearGrid(container);
  rowCount = document.getElementById("slider").value;
  createGrid();
  addListener();
}

//function to re-add the event listener of the mouseover event each time the grid is rebuilt (divs readded using JS)
function addListener() {
  let elements = document.getElementsByClassName("box");
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("mouseover", changeBackground, false);
  }
}

//changes background based on the color picker value selected by user
function changeBackground() {
  let elements = document.getElementsByClassName("box");
  for (var i = 0; i < elements.length; i++) {
    this.style.backgroundColor =
      document.getElementById("pencolorpicker").value;
  }
}

// Function to create the grid structure based on a user input
function createGrid() {
  for (var i = 0; i < rowCount; i++) {
    var row = document.createElement("div"); // Create as many divs as inputted. Each div will hold multiples boxes that make up the grid.
    row.className = "row";
    for (var j = 0; j < rowCount; j++) {
      var box = document.createElement("div");
      box.className = "box"; // adds the class of "originalColor" to each box created
      box.style.backgroundColor =
        document.getElementById("bgcolorpicker").value;
      row.appendChild(box);
    }
    container.appendChild(row);
  }
}

//build the grid on page load and attach mouseover event listeners to the divs
createGrid();
addListener();
