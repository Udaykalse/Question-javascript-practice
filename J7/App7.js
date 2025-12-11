var isPalindrome = function (x) {
    const y=Number(x.toString().split('').reverse().join(''));
    return y===x
};

console.log(isPalindrome(121));
