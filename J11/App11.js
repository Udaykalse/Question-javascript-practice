function printOdd(n) {
  let result = [];
  let num = 1;
  for (let i = 1; i <= n; i++) {
    result.push(num);
    num += 2;
  }
  return result;
}

console.log(printOdd(6));
