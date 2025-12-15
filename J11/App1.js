function logestWord(str) {
  let words = str.split(" ");
  let logest = "";

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > logest.length) {
      logest = words[i];
    }
  }
  return logest;
}
console.log(logestWord("I love JavaScript programming"));
