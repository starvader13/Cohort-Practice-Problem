const express = require("express")
const bodyParser = require("body-parser")

const app = express()

let users = [{
    name: "Ashutosh",
    kidneys: [{
        healthy: true
    }, {
        healthy: false
    }]
}];

app.get("/", function (req, res) {
    const ashutoshKidneys = users[0].kidneys.length;
    const healthyKidneys = users[0].kidneys.reduce((count, kidney) => {
        if (kidney.healthy) {
            count++;
        }
        return count;
    }, 0);
    const unhealthyKidneys = users[0].kidneys.length - healthyKidneys;
    res.json({
        numberOfKidneys: ashutoshKidneys,
        healthyKidneys,
        unhealthyKidneys
    })
})

app.use(bodyParser.json())

app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy == false) {
            users[0].kidneys[i].healthy = true;
        }
    }
    res.json({}) //Compulsory to send some data
})

// removing all unhealthy kidneys
app.delete("/", function (req, res) {
    let unhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!(users[0].kidneys[i].healthy)) {
            unhealthyKidney = true;
        }
    }

    if (unhealthyKidney) {
        const newKidneys = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if ((users[0].kidneys[i].healthy)) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.status(200).json({})
    }
    else {
        res.status(411).json({
            msg: "No Bad Kidneys"
        })
    }
})

app.listen(3000);