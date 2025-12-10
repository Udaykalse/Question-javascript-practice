const person = {
  name: "Aman",
  greet: function (greeting) {
    console.log(`${greeting}, My name is ${this.name}`);
  },
};

const an = { name: "Siddharth" };

person.greet.call(an, "Hello");
