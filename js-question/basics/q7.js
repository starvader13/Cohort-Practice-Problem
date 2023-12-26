/*
Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched". 
*/

function guessNumber(orgNum, num){
    if(num==orgNum){
        return "Good Work";
    }
    else{
        return "Not Matched";
    }
}

guessNum = Math.ceil(Math.random()*10)
console.log(guessNum)
