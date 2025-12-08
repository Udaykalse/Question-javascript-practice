const nums = [1, 2, 3, 4, 5, 6, 7, 11, 8, 90];
const odd = nums.filter((n) => n % 2 !== 0);
const even = nums.filter((n) => n % 2 === 0);

console.log(odd, even);
