var arr = [9, 4, 6];

var min = arr[0];

for (var i = 1; i < arr.length; i++) {
  if (arr[i] < min) min = arr[i];
}

console.log(min)