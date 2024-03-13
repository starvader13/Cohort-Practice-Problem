const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.get('/', function(req, res){
    res.send("Hello World!")
})

app.post('/conversations',(req, res)=>{
    console.log(req.body)
    console.log(req.headers["authorization"])
    res.send({
        msg: '2+2=4'
    })
})

app.listen(port, ()=>{
    console.log(`Example app listening on port:${port}`)
})