var str = "Hello";

var iDx = -1;

for (var i = 0; i < str.length; i++) {
  if (str[i] === "l") {
    iDx = i;
    break;
  }
}

console.log(iDx);
