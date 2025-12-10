let text = "JavaScript is fun";
function getSlice(str,st,ed){
    return str.slice(st,ed)
}

let sliceText=getSlice(text,0,10)
console.log("slice():", sliceText); 