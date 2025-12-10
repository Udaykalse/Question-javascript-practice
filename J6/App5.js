let numbers = [1, 2, 3, 4, 5];

function doubleArray(arr){
    let doubleArr=arr.map((x)=>x*2)
    return doubleArr
    // return arr.map(function(num){
    //     return num*2
    // })
}

let doubled = doubleArray(numbers);
console.log(doubled)