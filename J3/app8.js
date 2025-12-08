function countVowels(str) {
  const vowels = "aeiouAEIOU";
  const f = [];
  for (let ch of str) {
    if (vowels.includes(ch)) {
      f.push(ch);
    }
  }
  return {
    count: f.length,
    vowels: f,
  };
}

const result = countVowels("Developer");
console.log("Total vowels:", result.count);
console.log("Vowels found:", result.vowels);