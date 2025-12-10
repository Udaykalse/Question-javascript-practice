const person = { name: "Parvej" };

function greet(greeting) {
  console.log(`${greeting},I am ${this.name}`);
}

const greetingAman = greet.bind(person);

greetingAman("Hello");
