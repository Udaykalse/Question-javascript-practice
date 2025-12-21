let word = "madam";
let reverseStr = word.split("").reverse().join("");
if (word === reverseStr) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}
