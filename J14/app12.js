var arr = [1, 2, 2, 3];
var unique = [];
for (let i = 0; i < arr.length; i++) {
  if (unique.indexOf(arr[i]) === -1) {
    unique.push(arr[i]);
  }
}

// var unique=
console.log(unique)

console.log(new Set(arr))
