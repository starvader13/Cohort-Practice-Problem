 const fs = require("fs")

 function customReadFile(){
    return new Promise((resolve)=>{
        fs.readFile("a.txt","utf-8",(err, data)=>{
            resolve(data);
        });
    });
 }

 function onDone(data){
    console.log(data)
 }

 customReadFile().then(onDone)