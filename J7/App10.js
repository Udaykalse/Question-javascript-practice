function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function iStPrime(n) {
  const primes = [];
  let number = 2;

  while (primes.length < n) {
    if (isPrime(number)) {
      primes.push(number);
    }
    number++;
  }
  return primes;
}

console.log(iStPrime(10));
