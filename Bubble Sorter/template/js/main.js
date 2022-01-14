// Create bars using numbers from numsArray
function setAndAdd() {
  // Create array of 100 random whole numbers from 1 to 100
  let numsArray = [];
  for (i = 0; i < 100; i++) {
    let num = Math.floor(Math.random() * 301);
    numsArray.push(num);
  }
  //Clears span of 100 divs so divs don't just keep adding up when a new array is requested
  document.getElementById("bars").innerHTML = "";

  // Add 100 divs to HTML, give class "styling", and height of num from numsArray
  for (let bar of numsArray) {
    let makeDiv = document.createElement("DIV");
    let divBars = document.getElementById("bars");

    makeDiv.className = "styling";
    makeDiv.style.height = Math.floor(bar) + "px";

    divBars.appendChild(makeDiv);
  }
  console.log(numsArray);
}

//Button to create new array
const newArrBtn = document.getElementById("newArray");
newArrBtn.addEventListener("click", setAndAdd);
