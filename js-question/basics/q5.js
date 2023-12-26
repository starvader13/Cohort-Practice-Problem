/*
Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.
*/

function rotateRight(stringName, count=15){
    let transitionCount = 0;
    let intervalId = setInterval(()=>{
        console.log(stringName);
        stringName = stringName[stringName.length-1] + stringName.substring(0, stringName.length-1);
        transitionCount++;
        if(transitionCount>count){
            clearInterval(intervalId);
        }
    }, 100)
}

rotateRight('w3resource')