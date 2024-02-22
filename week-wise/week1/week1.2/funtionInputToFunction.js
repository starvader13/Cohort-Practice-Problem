function sum(a, b, fnToCall){
    fnToCall(a+b);
}

function displayResult(data){
    console.log("Result of the sum is: " + data);
}

function displayResultPassive(data){
    console.log("Sum's result is: " + data);
}

sum(1, 2, displayResult)