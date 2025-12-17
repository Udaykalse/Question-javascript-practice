function countFailed(statusCode){
    let count=0;
    for(let i=0;i<statusCode.length;i++){
        if(statusCode[i]>=400){
            count++;
        }
    }
    return count;
}

console.log(countFailed([200,300,404,500,201,403]))