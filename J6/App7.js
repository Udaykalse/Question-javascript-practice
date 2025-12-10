function mult(a, b) {
  return a * b;
}

const multip = mult.bind(null, 5);

console.log(multip(10));
