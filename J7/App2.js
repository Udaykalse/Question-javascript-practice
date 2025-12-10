const arr = ["a", "b", "c", "z", "s", "c", "a", "b"];

const unique = arr.filter((itM, idX) => {
  return arr.indexOf(itM) === idX;
});

console.log(unique);
