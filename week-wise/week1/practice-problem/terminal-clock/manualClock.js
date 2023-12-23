// Create a terminal clock (HH:MM:SS)

function manualTerminalClock(){
    const date = new Date();
    let hours =  date.getHours();
    let minutes =  date.getMinutes();
    let seconds =  date.getSeconds();
    let intervalId = setInterval( () => {
        if(seconds>=60){
            minutes++;
            seconds=0;
            if(minutes>=60){
                hours++;
                minutes=0;
                if(hours>=24){
                    hours=0;
                }
            }
        }
        seconds++;
        console.log(`${hours}:${minutes}:${seconds}`)
    },1*1000)
}

manualTerminalClock()