const arr = [10, 4, 55, 2];
console.log(Math.max(...arr));
console.log(Math.min(...arr));

function findMax(arr1) {
  let max = arr1[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function findMin(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}
const arr1 = [10, 4, 55, 2];
console.log("Max:", findMax(arr1));
console.log("Min:", findMin(arr));