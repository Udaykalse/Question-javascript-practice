function greet(name, callback) {
  console.log("Hi", name);
  callback();
}

function sayHello() {
  console.log("Bye");
}

greet("Uday", sayHello);
