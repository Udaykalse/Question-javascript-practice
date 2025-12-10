let text = "JavaScript is fun";

function checkIncludes(str,word){
    return str.includes(word)
}

let hasScript=checkIncludes(text,"is")

console.log("includes():", hasScript);