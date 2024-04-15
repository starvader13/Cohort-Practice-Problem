const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.get("/interest", (req, res) => {
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);

    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;

    if(isNaN(interest)){
        return res.status(403).json({
            msg: "Input is not a valid number",
            interest: null,
            totalAmount: totalAmount
        });
    }

    return res.status(200).json({
        interest: interest,
        totalAmount: totalAmount
    });
})

app.listen(3000, ()=>{
    console.log("Server is up");
})
