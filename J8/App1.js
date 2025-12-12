function secondLargest(arr) {
  let maxNumberFromArray = -Infinity;
  let secondLargestNumberFromArray = -Infinity;
  for (let num of arr) {
    if (num > maxNumberFromArray) {
      secondLargestNumberFromArray = maxNumberFromArray;
      maxNumberFromArray = num;
    } else if (
      num > secondLargestNumberFromArray &&
      num !== maxNumberFromArray
    ) {
      secondLargestNumberFromArray = num;
    }
  }
  return secondLargestNumberFromArray;
}

console.log(secondLargest([10, 20, 4, 45, 99]));
