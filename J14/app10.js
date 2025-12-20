var arr = [1, 2, 3];
var copy = [];
for (var i = 0; i < arr.length; i++) {
  copy.push(arr[i]);
}

console.log(copy)
copy.push(12)
console.log(copy)
