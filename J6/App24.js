function secondLargestSort(arr) {
  const sorted = [...arr].sort((a, b) => b - a);
  return sorted[1];
}
console.log(secondLargestSort([10, 5, 8, 20, 3]));


