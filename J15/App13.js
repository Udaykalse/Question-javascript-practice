function greet(name, callback) {
    console.log("Hey",name)
  callback();
}

greet("john", () => console.log('Bye'));
