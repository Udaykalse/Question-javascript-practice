function cVowels(str) {
  vowels = "aeiouAEIOU";
  return [...str].filter((ch) => vowels.includes(ch)).length;
}

console.log(cVowels("Udaysinh"));
