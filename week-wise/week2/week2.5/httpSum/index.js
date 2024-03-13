const express = require("express")
const app = express();

function calculateSum(n){
    let ans = 0;
    for(let i=0;i<=n;i++){
        ans = ans+i;
    }
    return ans;
}

app.get("/", function(req, res){
    const n = req.query.n;
    res.send(calculateSum(n).toString());
})

app.listen(3000, ()=>{
    console.log("Server is running at port: 3000")
})
