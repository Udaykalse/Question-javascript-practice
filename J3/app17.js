function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// console.log(add(2)(3));//[Function (anonymous)]
// console.log(add(2)()(3)) //NaN
console.log(add(2)(3)(1)) //6