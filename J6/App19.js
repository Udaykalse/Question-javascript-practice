let person = { name: "Uday", age: 25, city: "Pune" };

function getValues(obj){
    return Object.values(obj);
}

let values = getValues(person);
console.log("Object.values():", values);