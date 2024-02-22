// Calculate the time it takes between a setTimeout call and the inner function actually running

function getTimeDiff(){
    let startTime = Date.now();
    setTimeout(()=>{
        let endTime = Date.now();
        console.log(Math.abs(startTime-endTime));
    },1000)
}

getTimeDiff()
