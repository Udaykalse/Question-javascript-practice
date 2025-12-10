function sumOfNums(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = Number(arr[i]);
    if (!isNaN(num)) {
      sum += num;
    }
  }
  return sum;
}

console.log(sumOfNums([1, "3", true, 5, "7", false]));
