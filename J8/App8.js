function factorialNumber(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorialNumber(num - 1);
}

console.log(factorialNumber(5));
