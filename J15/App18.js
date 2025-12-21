var arr = ["a", "b", "c", "a", "b"];

var unique = [];

for (let i = 0; i < arr.length; i++) {
  if (!unique.includes(arr[i])) {
     unique.push(arr[i]);
  }
}

console.log(unique);
