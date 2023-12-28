const express = require("express");
const bodyParser = require("body-parser")

const app = express();
const port = 3000;

//middleware
app.use(bodyParser.json())

app.post('/', (req, res)=>{
    console.log(req.body)
    res.send('Hello World')
})

app.get('/', (req, res)=>{
    res.send("<b>Hello World</b>")
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
}) 