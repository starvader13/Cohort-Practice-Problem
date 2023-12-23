// Create a terminal clock (HH:MM:SS)

function terminalClock(){
    const intervalId = setInterval( () => {
        let date = new Date();
        console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    }, 1*1000)
}

terminalClock()