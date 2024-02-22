// Create a counter in Javascript (counts down from 30 to 0)

function counter(){
    let i=0;
    let itr = setInterval(() => {
        if(i<=30){
            console.log(i);
            i++;
        }
        else{
            clearInterval(itr);
        }
    },1000)
}

counter()