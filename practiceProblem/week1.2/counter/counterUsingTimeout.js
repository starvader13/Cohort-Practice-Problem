// Create a counter in Javascript (counts down from 30 to 0)

function counter(i){
    let itr = setTimeout(function (){
        if(i<=30){
            console.log(i);
            i++;
            counter(i);
        }
        else{
            clearTimeout(itr);
        }
    }, 10);
}

counter(0);