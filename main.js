// These variables store the boxes on the side
let itemOne = document.getElementById("list-item-one");
let itemTwo = document.getElementById("list-item-two");
let itemThree = document.getElementById("list-item-three");
let itemFour = document.getElementById("list-item-four");
let itemFive = document.getElementById("list-item-five");
let resetButton = document.getElementById("reset-button");

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function () {
  itemOne.style.width = "";
  itemTwo.style.backgroundColor = "";
  itemThree.innerHTML = "The mouse must leave the box to change the text";
  itemFive.style.display = "none";
};
resetButton.onclick = reset;

// Fucntion for Item One
function increaseWidth() {
  itemOne.style.width = "700px";
}

// Event handler for Item One
itemOne.onmouseover = increaseWidth;

// Fucntion for Item Two
function changeBackground() {
  itemTwo.style.backgroundColor = "blue";
}

// Event handler for Item Two
itemTwo.onmouseup = changeBackground;

// Fucntion for Item Three
function changeText() {
  itemThree.innerHTML = "The mouse has left the element";
}

// Event handler for Item Three
itemThree.onmouseout = changeText;

// Fucntion for Item Five
function showItem() {
  itemFive.style.display = "block";
}

// Event handler for Item Four
itemFour.onmousedown = showItem();
