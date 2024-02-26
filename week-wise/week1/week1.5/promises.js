const fs = require("fs")

function read(){
    const promise = new Promise(function(resolve){
        fs.readFile("../asynchronous/a.txt", "utf-8", function(err, data){
            resolve(data);
        });
    });
    return promise;
}

function onDone(data){
    console.log(data);
}

let pr=read()
pr.then(onDone)
