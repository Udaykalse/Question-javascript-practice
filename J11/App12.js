function primeNumbr(inputNumber) {
  let firstnPrimeNumbersList = [];
  let num = 2;
  while (firstnPrimeNumbersList.length < inputNumber) {
    let isPrime = true;
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      firstnPrimeNumbersList.push(num);
    }
    num++;
  }
  return firstnPrimeNumbersList;
}

console.log(primeNumbr(5));
