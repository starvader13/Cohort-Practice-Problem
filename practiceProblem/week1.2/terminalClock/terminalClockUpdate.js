// Create a terminal clock (HH:MM:SS)

function terminalClock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    console.log(`${hour}:${minute}:${second}`);
    setInterval(()=>{
        if(second==59){
            minute++;
            second=0;
            if(minute==59){
                hour++;
                minute=0;
                if(hour==23){
                    hour=0;
                    minute=0;
                    second=0
                }
            }
        }
        else{
            second++;
        }
        console.log(`${hour}:${minute}:${second}`);
    },1000)
}

terminalClock()