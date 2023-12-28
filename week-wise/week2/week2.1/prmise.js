function myOwnSetTimeout(){
    let p = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve();
        },10000)
    })
    return p;
}

function onDone(){
    console.log("hi there");
}

console.log("hi there 2")

let ans = myOwnSetTimeout();
a=0;
for(let i=0;i<10000000000;i++){
    a=a+1;
}
console.log("hi there 3")
ans.then(onDone)

console.log("hi there 4")