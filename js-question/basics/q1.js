/*
Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

function timeInFormat() {
    let d = new Date();
    let day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if(d.getHours()>=12){
        meridian='PM';
        hour = d.getHours()-12;
    }
    else{    
        meridian='AM';
        hour = d.getHours();
    }
    console.log(`Today is: ${day[d.getDay()-1]}`)
    console.log(`Current time is : ${hour} ${meridian} : ${d.getMinutes()} : ${d.getSeconds()} `)
}

timeInFormat()