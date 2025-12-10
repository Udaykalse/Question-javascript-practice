const person1 = { name: "Aman" };
const person2 = { name: "Siddharth" };

function sayHello() {
  console.log(`Hello , my name is ${this.name}`);
}

sayHello.call(person2);
