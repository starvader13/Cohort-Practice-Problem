function myOwnSetTimeout(callback, duration) {
    setTimeout(()=>{
        callback();
    }, duration);
}

// promisify
function promisifiedMyOwnSetTimeout(duration){
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve();
        }, duration);
    });
}

const ans = promisifiedMyOwnSetTimeout(1000);
ans.then(()=>{
    console.log("Timeout")
});