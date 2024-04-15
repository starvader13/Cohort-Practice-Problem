const express = require('express');
const {todo} = require('./db');
const { bodySchema, idSchema } = require("./types");
require('dotenv').config();
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials:true,
}));

const port = process.env.PORT || 7000;

function bodySchemaAuthentication(req, res, next){
    const jsonPayload = req.body;
    if(!bodySchema.safeParse(jsonPayload).success){
        return res.status(401).json({
            msg: "Wrong input pattern"
        });
    }
    return next();
}

function idSchemaAuthentication(req, res, next){
    const jsonPayload = req.body;
    if(!idSchema.safeParse(jsonPayload).success){
        return res.status(401).json({
            msg: "Wrong input pattern"
        });
    }
    return next();
}

app.post("/todo", bodySchemaAuthentication, async (req, res)=>{
    const jsonPayload = req.body;
    const response = await todo.create({
        title: jsonPayload.title,
        description: jsonPayload.description,
        completed: false
    });

    if(!response){
        return res.status(500).json({
            msg: "Internal Server Error"
        })
    }

    res.status(200).json({
        msg: "Todo added successfully"
    })

})

app.get("/todo", async (req, res)=>{
    const response = await todo.find({});
    if(!response){
        return res.status(500).json({
            msg: "Internal Server Error"
        })
    }

    return res.status(200).json({
        todos: response
    });
})

app.put("/completed", idSchemaAuthentication, async (req,res)=>{
    const id = req.body.id;
    const response = await todo.updateOne({_id: id},{
        completed: true
    });

    if(!response){
        return res.status(404).json({
            msg: "Either the todo does not exist or is already completed"
        })
    }

    res.status(200).json({
        msg: "Todo marked as completed"
    });
})

app.get("/*", (req, res)=>{
    res.status(404).json({
        msg: "Route not defined"
    })
})

// app.use((err, req, res, next)=>{
//     res.status(500).json({
//         msg: "Internal Server Error"
//     })
// })

app.listen(port,()=>{
    console.log(`Server is listening at PORT ${port}`);
})