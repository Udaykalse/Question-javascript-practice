function greet(name, callback) {
  console.log("Hello ", name);
  callback();
}

greet("Uday", () => console.log("Welcome"));
