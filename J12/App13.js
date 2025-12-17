function printOdd(n){
    let result="";
    for (let i =0;i<n;i++){
        result+=(2*i+1)+" "
    }
    return result.trim()
}

console.log(printOdd(5))