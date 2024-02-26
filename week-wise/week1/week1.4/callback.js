function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sumOfSomething(a, b, fnToCall){
    return fnToCall(a) + fnToCall(b);
}

console.log(sumOfSomething(2,3,(n)=>{
    return n*n*n*n;
}))