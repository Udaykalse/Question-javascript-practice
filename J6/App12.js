let numbers = [1, 2, 3, 4, 5];

function filterEven(num){
    let fiterNums=num.filter((num)=>num%2===0)
    return fiterNums
}

let evenNumbers = filterEven(numbers);
console.log("filter():", evenNumbers);