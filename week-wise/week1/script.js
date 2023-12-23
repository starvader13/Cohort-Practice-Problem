// Practice-Problem for week1.2

// Program to greet a person given their first and last name
/*
firstName = "Ashutosh"
lastName = "Gupta"
console.log(`Hello, How are you ${firstName} ${lastName}`)
*/

// Program to greet a person based on their gender
/*
firstName = "Ashutosh"
lastName = "Gupta"
gender = "Male"

if(gender === "Male"){
    console.log(`Hello, How are you ${firstName} ${lastName}`)
}
else{
    console.log(`Hey, How are you ${firstName} ${lastName}`)   
}
*/

// Program to count from 0 - 1000
/*
number = 1000
for(let i=0;i<=number;i++){
    console.log(i)
}
*/

// Program to print all even numer in an array
/*
const numberArray = [21, 22, 23, 24, 25]
for(let i=0;i<numberArray.length;i++){
    if(numberArray[i]%2==0){
        console.log(numberArray[i])
    }
}
*/

// Program to print largest number in an array
/*
const numberArray = [21, 22, 27, 24, 25 ,26]
let max = numberArray[0]
for(let i=0; i<numberArray.length; i++){
    if(max<numberArray[i]){
        max = numberArray[i];
    }
}
console.log(max)
*/

// Print the name of male people from a complex obect
/*
let people = [{
    firstName: "Ashutosh",
    gender: "Male",
    metadata: {
        age: 21,
    }
},
{
    firstName: "foo",
    gender: "Female",
    metadata: {
        age: 44,
        address: "123,foo-bar"
    }
},
{
    firstName: "bar",
    gender: "Male"
}]

for(let i=0;i<people.length;i++){
    if(people[i].gender === "Male"){
        console.log(people[i].firstName)
    }
}
*/

// Reverse all the elements of an array
/*
let arrNum = [1,2,3,4]
for(let i=0;i<(arrNum.length)/2; i++){
    arrNum[i] += arrNum[arrNum.length-i-1];
    arrNum[arrNum.length-i-1] = arrNum[i] -  arrNum[arrNum.length-i-1];
    arrNum[i] = arrNum[i] -  arrNum[arrNum.length-i-1];
}

for(let i=0;i<(arrNum.length); i++){
    console.log(arrNum[i]);
}
console.table(arrNum)
*/

// Calculate the sum, print the result in pretty format and print the result in passive format 
/*
function sum(a,b, fun){
    let result = a + b;
    fun(result)
}

function displayResult(data){
    console.log(`Result after the sum is: ${data}`)
}

function printPassiveResult(data){
    console.log(`After sum, the result is: ${data}`)
}

sum(1, 2, displayResult)
*/