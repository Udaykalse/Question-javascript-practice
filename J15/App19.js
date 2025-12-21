// let ab = 20;

function add(a = undefined, b = undefined, ab = 20) {
  if (a === undefined) {
    c = ab + b;
  }
  if (b === undefined) {
    c = ab + a;
  }
  return c;
}

console.log(add(10));
