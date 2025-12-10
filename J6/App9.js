function sum(a, b, c) {
  return a + b + c;
}

const num = [10, 20, 30];

console.log(sum.apply(null, num));
