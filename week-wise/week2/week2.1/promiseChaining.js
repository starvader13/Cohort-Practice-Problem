function promisifiedTimeout(duration){
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve("hii");
        }, duration);
    });
}

promisifiedTimeout(5000).then((val)=>{
    console.log("hii there1")
    return promisifiedTimeout(10000).then((val)=>{
        console.log(val);
    })
})