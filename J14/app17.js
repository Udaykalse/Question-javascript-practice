var arr = [1, 2, 3, 4, 5, 6, 7];
var sum = 0;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) sum = sum + arr[i];
}

console.log(sum)
