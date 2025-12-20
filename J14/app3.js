var arr = [-1, 0, -3];

var count = 0;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] < 0) count++;
}

console.log(count)
