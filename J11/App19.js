function power(base, exp) {
  let result = 1;
  for (let i = 1; i <= exp; i++) {
    result *= base;
  }
  console.log(result);
}

power(2, 3);
