const numbers = [5, 6, 2, 8, 1];

function findMax(...nums) {
  return Math.max(...nums);
}

const max = findMax.apply(null, numbers);
console.log(max);
