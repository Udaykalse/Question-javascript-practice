let person = { name: "Uday", age: 25, city: "Pune" };

function getEntries(obj){
    return Object.entries(obj);
}

let Entries = getEntries(person);
console.log("Object.entries():", Entries);