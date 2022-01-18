//Creates pause between comparisons for ease of visualziation
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function bubbleSort(numsArray, divLen) {
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
  //Swaps values in variables being compared
  function swap(arr, xp, yp) {
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
  }
  //Iterates through array until sorted
  for (i = 0; i < divLen; i++) {
    for (j = 0; j < divLen - i - 1; j++) {
      //Changes bar color to white for the bars being compared for ease of visualization
      divs[j].style.background = "white";
      divs[j + 1].style.background = "white";
      if (numsArray[j] > numsArray[j + 1]) {
        await sleep(500);
        swap(numsArray, j, j + 1);
        //Changes style height of divs being compared
        divs[j].style.height = numsArray[j] + "px";
        divs[j + 1].style.height = numsArray[j + 1] + "px";
      }
      //Changes bars back to red once they are no longer actively being compared
      divs[j].style.background = "red";
      divs[j + 1].style.background = "red";
    }
    //Changes bar color to green once bar is in its final position
    divs[divLen - i - 1].style.background = "green";
  }
}
//Button to bubble sort numbers
const bubbleBtn = document.getElementById("bubble");
if (bubbleBtn) {
  bubbleBtn.addEventListener("click", bubbleSort);
}
