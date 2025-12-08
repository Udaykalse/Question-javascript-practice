function isAnagram(str1, str2) {
  const clean = (str) => str.toLowerCase().split("").sort().join("");
  return clean(str1) === clean(str2);
}

console.log(isAnagram("listen", "silent"));
