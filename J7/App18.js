function sumArray(arr) {
  let total = arr.reduce((sum, n) => sum + n, 0);
  return total;
}

console.log(sumArray([1, 2, 3, 4]));
