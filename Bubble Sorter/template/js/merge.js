//Creates pause between comparisons for ease of visualziation
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function mergeSort(numsArray, divLen) {
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

  //Merge Sort Helper
  function mergeSortHelper(numsArray) {
    if (numsArray.length <= 1) {
      return numsArray;
    }
    let middle = Math.floor(numsArray.length / 2);
    let leftArray = numsArray.slice(0, middle);
    let rightArray = numsArray.slice(middle);
    leftArray = mergeSortHelper(leftArray);
    rightArray = mergeSortHelper(rightArray);
    return merge(leftArray, rightArray);
  }

  mergeSortHelper(numsArray);

  //Merge
  function merge(leftArray, rightArray) {
    let newArray = [];
    while (leftArray.length && rightArray.length) {
      if (leftArray[0] <= rightArray[0]) {
        newArray.push(leftArray.shift());
      } else {
        newArray.push(rightArray.shift());
      }
    }
    while (leftArray.length) {
      newArray.push(leftArray.shift());
    }
    while (rightArray.length) {
      newArray.push(rightArray.shift());
    }
    return newArray;
    console.log(newArray);
  }
}

//Button to merge sort numbers
const mergeBtn = document.getElementById("merge");
mergeBtn.addEventListener("click", mergeSort);

//
// //Merge Sort
// let sortedArray = mergeSortHelper(numsArray);
// let sortedDivs = document.querySelectorAll("DIV");
// let sortedDivsLen = sortedDivs.length;
// let sortedDivsArray = [];
// for (let i = 0; i < sortedDivsLen; i++) {
//     sortedDivsArray.push(parseInt(sortedDivs[i].style.height));
// }

//Merge Sort Helper
// function mergeSortHelper(numsArray) {
//   if (numsArray.length <= 1) {
//     return numsArray;
//   }
//   let mid = Math.floor(numsArray.length / 2);
//   let left = numsArray.slice(0, mid);
//   let right = numsArray.slice(mid);
//   left = mergeSortHelper(left);
//   right = mergeSortHelper(right);
//   return merge(left, right);
// }
