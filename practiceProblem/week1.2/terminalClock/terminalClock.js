// Create a terminal clock (HH:MM:SS)

function terminalClock(){
    setInterval(()=>{
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        console.log(`${hour}:${minute}:${second}`);
    }, 1000)
}

terminalClock();