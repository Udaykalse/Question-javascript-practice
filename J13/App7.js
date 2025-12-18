let str="Javascript"

let c=0;
for (let ch of str ){
    if('aeiou'.includes(ch)){
        c++;
    }
}

console.log(c)