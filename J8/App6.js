function flatten(arr, res = []) {
  for (let itM of arr) {
    if (Array.isArray(itM)) flatten(itM, res);
    else res.push(itM);
  }
  return res;
}


console.log(flatten([1, [2, [3, [4]]]]));