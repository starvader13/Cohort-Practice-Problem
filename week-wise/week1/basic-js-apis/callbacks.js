function square(n){
    n*n
}

function sumOfSomething(a, b, callback){
    return callback(a) + callback(b)
}

let ans = sumOfSomething(2, 2, function (n) {
    return n * n * n
})
console.log(ans)