function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sumOfSomething(a, b, fn){
    return fn(a)+fn(b);
}

console.log(sumOfSomething(1,2,square));