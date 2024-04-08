const express = require('express')

const app = express()

app.get("/health-checkup", (req, res)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(username!="ashutosh" || password!="ashu"){
        return res.status(403).json({
            msg: "User does not exist"
        });
    }  

    if(kidneyId < 1 || kidneyId > 2){
        return res.status(411).json({
            msg: "wrong Input"
        });
    }
    res.status(200).send("Your kidney is healthy");
})

app.listen(3000);