let arr = [10, 20, 30, 5, 12, 8];
let max = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max)