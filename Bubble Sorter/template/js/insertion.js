//Creates pause between comparisons for ease of visualziation
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function insertionSort(numsArray, divLen) {
  let divs = document.querySelectorAll("DIV");
  divLen = divs.length;
  numsArray = [];
  //Gets style height of all divs (created by New Array button) and adds to numsArray
  for (h = 0; h < divLen; h++) {
    const divStyles = window.getComputedStyle(divs[h]);
    let transform = divStyles.getPropertyValue("height");
    transform = Number(transform.slice(0, -2));
    numsArray.push(transform);
  }

  for (i = 1; i < divLen; i++) {
    let key = numsArray[i];
    let j = i - 1;
    await sleep(500);

    //Moves bars that are greater than key to one postion ahead
    while (j >= 0) {
      //Changes style height of divs
      divs[i].style.height = numsArray[i] + "px";
      divs[j].style.height = numsArray[j] + "px";
      //Changes bars being compared to white for better visualization
      divs[i].style.background = "white";
      divs[j].style.background = "white";
      if (numsArray[j] > key) {
        numsArray[j + 1] = numsArray[j];
        numsArray[j] = key;
        //Changes bars back to red once they are no longer actively being compared
        divs[i].style.background = "red";
        divs[j].style.background = "red";
      }
      j = j - 1;
    }
  }
  for (k = 0; k < divLen; k++) {
    //Changes bars colors to green once bar is in their final positions
    divs[k].style.background = "green";
  }
}

//Button to inesrtion sort numbers
const insertionBtn = document.getElementById("insertion");
insertionBtn.addEventListener("click", insertionSort);
