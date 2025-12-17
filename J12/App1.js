function calcultor(a,b,op){
    if(op==='+') console.log(a+b);
    else if (op==='*') console.log(a*b);
    else if (op==='-') console.log(a-b);
    else if (op==='/') console.log(a/b);
    else console.log('Invalid Operator');
}

calcultor(10,5,'*');