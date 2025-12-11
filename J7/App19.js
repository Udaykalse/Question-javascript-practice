function upperCaseWords(str) {
  let captialLetterWord = str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  return captialLetterWord;
}
console.log(upperCaseWords("hello world javascript"));
