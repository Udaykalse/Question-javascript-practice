function printPerfectnNUmbers(n) {
  let result = [];
  let num = 1;
  while (result.length < n) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    if (sum === num && num !== 0) {
      result.push(num);
    }
    num++;
  }
  return result;
}

console.log(printPerfectnNUmbers(4));
