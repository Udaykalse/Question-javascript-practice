function sumValidSalaries(sal){
    let sum=0;
    for(let i=0;i<sal.length;i++){
        if(sal[i]>0){
            sum+=sal[i]
        }
    }
    return sum;
}


console.log(sumValidSalaries([30000, -2000, 40000, 0]));