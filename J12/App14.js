function print_Natural(n){
    let result="";
    for(let i=1;i<=n;i++){
        result +=i+" ";
    }
    return result.trim();
}

console.log(print_Natural(5))