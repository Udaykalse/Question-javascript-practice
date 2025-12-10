function sumOfNum(arr) {
  return arr
    .filter((itM) => !isNaN(itM))
    .map((itM) => Number(itM))
    .reduce((total, num) => total + num, 0);
}

console.log(sumOfNum([1, "sta", "3", true, 5, "7", false, "str"]));
