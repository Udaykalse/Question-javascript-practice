let numbers = [1, 2, 3, 4, 5];

function filterArray(arr){
    let evenArr=arr.filter((num)=>num%2===0)
    return evenArr
}

let evenNumbers = filterArray(numbers);
console.log("filter():", evenNumbers);