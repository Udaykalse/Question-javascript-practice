const person = {
  name: "Uday",
  greet: function (greeting) {
    console.log(`${greeting},my name is ${this.name}`);
  },
};

const greetAman = person.greet.bind({ name: "Aman" }, "Hi");

greetAman();
