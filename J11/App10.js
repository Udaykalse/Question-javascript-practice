function evenNumber(n) {
  let result = [];
  let num = 2;
  for (let i = 1; i <= n; i++) {
    result.push(num);
    num += 2;
  }
  return result;
}

console.log(evenNumber(5))
