let person = { name: "Uday", age: 25, city: "Pune" };

function getKeys(obj){
    return Object.keys(obj);
}

let keys=getKeys(person);

console.log(keys);