function mergeTwoSorted(arr1, arr2) {
  let newArray = [...arr1, ...arr2];
  return newArray.sort();
}

console.log(mergeTwoSorted([1,3,5], [2,4,6]));