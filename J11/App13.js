function printArmstrong(n) {
  let result = [];
  let num = 0;
  while (result.length < n) {
    let temp = num;
    let sum = 0;
    let digits = num.toString().length;

    while (temp > 0) {
      let digit = temp % 10;
      sum += digit ** digits;
      temp = Math.floor(temp / 10);
    }
    if (sum === num && num > 9) {
      result.push(num);
    }
    num++;
  }
  return result;
}

console.log(printArmstrong(4));
