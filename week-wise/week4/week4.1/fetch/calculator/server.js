 const express = require("express")
const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allows any origin
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get("/sum",(req, res)=>{
    const firstValue = req.query.a;
    const secondValue = req.query.b;

    const sum = parseInt(firstValue) + parseInt(secondValue);

    if(isNaN(sum)){
        return res.status(403).json({
            message: "Input is not a number",
            sum: sum
        })
    }

    return res.status(200).send(sum.toString());
})

app.listen(3000,()=>{
    console.log("Server started on port 3000");
})