let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let Even = [];
let odd = [];

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    Even.push(num[i]);
  } else {
    odd.push(num[i]);
  }
}

console.log(` Even Number's Array :- ${Even} And Odd Number's Array :- ${odd}`);
