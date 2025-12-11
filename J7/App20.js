function longestCommonPrefix(strs) {
  //   let sortStr = strs.map((e) => e.split("").sort().join(""));
  let sortStr = strs.sort();
  let first = sortStr[0];
  let last = sortStr[sortStr.length - 1];
  let minLength = Math.min(first.length, last.length);
  let i = 0;
  while (i < minLength && first[i] === last[i]) {
    i++;
  }
  return first.substring(0, i);
}
let arr = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(arr));
