function LCM(a, b) {
  let max = a > b ? a : b;
  while (true) {
    if (max % a === 0 && max % b === 0) {
      console.log(max);
      break;
    }
    max++;
  }
}
LCM(4, 6);
