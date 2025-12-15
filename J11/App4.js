function isArmstrong(num) {
  let sum = 0;
  let temp = Number;
  let digit = Number.toString().length;

  while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** digit;
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}

console.log(isArmstrong(153));
