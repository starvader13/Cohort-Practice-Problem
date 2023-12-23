// 1. Create a counter in Javascript (counts down from 30 to 0)

function counter(startRange){
    setTimeout(() => {
        if(startRange>=0){
            console.log(startRange);
            startRange--;
            counter(startRange);
        }
    },1*1000)
}

counter(30)