function isPlaindrome(str) {

  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPlaindrome("GFG"));