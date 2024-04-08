const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const jwtPassword = "123abc";
const mongoUrl = "mongodb+srv://admin:mongodbaccess22@cluster0.s7pwrdc.mongodb.net/practiceUserApp";

const app = express();

mongoose.connect(mongoUrl);

app.use(express.json());

const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
    name: zod.string()
});

const model = mongoose.model('Users', {
    email: String,
    password: String,
    name: String
});

const authSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6)
})

function signupInputValidator(req,res,next){
    const jsonData = req.body;
    const response = schema.safeParse(jsonData);

    if(!response.success){
        return res.status(411).json({
            msg: "Input pattern does not match to the required pattern"
        });
    }
    next();
}

function signinInputValidator(req, res, next){
    const jsonData = req.body;
    const response = authSchema.safeParse(jsonData);

    if(!response.success){
        return res.status(411).json({
            msg: "Input pattern does not match to the required pattern"
        });
    }
    next();
}

app.post("/signup", signupInputValidator, (req, res)=>{
    const jsonData = req.body;
    const user = new model(jsonData);
    
    user.save()
    .then(()=>{
        console.log("Migration Successfull")
        return res.status(200).send("OK");
    })
    .catch(()=>{
        return res.status(400).json({
            msg: "Cananot write to the database"
        });
    });
})

app.post("/signin", signinInputValidator, (req,res)=>{
    const jsonData = req.body;
    model.findOne({email: jsonData.email})
        .then(document=>{
            if(document.password!==jsonData.password){
                return res.status(411).json({
                    msg: "Either the username or password is incorrect"
                });
            }
            const token = jwt.sign({email: document.email, name: document.name}, jwtPassword)
            return res.status(200).json({
                token
            })
        })
        .catch(err=>{
            console.log(err);
            return res.status(403).json({
                msg: "User does not exist"
            })
        });
})

app.get("/users",(req, res)=>{
    const authorization = req.headers.authorization;

    try{
        const jsonData = jwt.verify(authorization, jwtPassword);
        model.find()
            .then(document=>{
                const user = document.filter((data)=>{
                    if(data.email!==jsonData.email){
                        return true;
                    }
                    return false
                });

                const response = user.map((item)=>
                    ({
                        name: item.name,
                        email: item.email
                    })
                );

                return res.status(200).json(
                    response
                );
            })
            .catch(err=>{
                return res.status(400).json({
                    msg: "Reading Database failed",
                    error: err
                });
            });
    
    }
    catch(err){
        return res.status(400).json({
            msg: "Authentication Failed",
            error: err
        });
    }
})

app.listen(3000, ()=>{
    console.log("Listeining on port:3000");
})