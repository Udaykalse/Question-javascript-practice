function even(n) {
  let count = 0,
    num = 2;
  while (count < n) {
    console.log(num);
    num += 2;
    count++;
  }
}
even(5);
