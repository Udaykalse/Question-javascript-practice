const arr = [1, 2, 3];
console.log(arr.reverse());


function reverseArray(arr1) {
    let res=[];
    for (let i=arr1.length-1;i>=0;i--){
        res.push(arr1[i]);
    }

    return res;
}

const arr1=[1,2,3,4];
console.log(reverseArray(arr1))