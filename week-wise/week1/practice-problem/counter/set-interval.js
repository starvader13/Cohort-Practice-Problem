// 1. Create a counter in Javascript (counts down from 30 to 0) 

function counter(startRange){
    const INTERVALID = setInterval(function (){
        if(startRange>=0){
            console.log(startRange);
            startRange--;
        }
        else{
            clearInterval(INTERVALID)
        }
    },1*1000)
}

counter(30)