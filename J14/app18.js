var arr = [5, 12, 3];

var count = 0;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    count++;
  }
}

console.log(count);
