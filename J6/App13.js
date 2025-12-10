function sumArray(arr) {
  return arr.reduce(function (t, num) {
    return t + num;
  }, 0);
}
let numbers = [1, 2, 3, 4, 5];
let sum = sumArray(numbers);
console.log("reduce():", sum); 