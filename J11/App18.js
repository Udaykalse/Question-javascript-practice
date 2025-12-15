function perfect(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  console.log(sum === num ? "Perfect" : "Not Perfect");
}

perfect(6);
