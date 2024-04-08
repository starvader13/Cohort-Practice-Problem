const express = require('express');
const jwt = require('jsonwebtoken');
const zod = require('zod');
const jwtPassword = "abc123"

const app = express();

app.use(express.json());

const ALL_USERS = [
    {
      username: "harkirat@gmail.com",
      password: "123",
      name: "harkirat singh",
    },
    {
      username: "raman@gmail.com",
      password: "123321",
      name: "Raman singh",
    },
    {
      username: "mansi@gmail.com",
      password: "123321",
      name: "Mansi Thakur",
    },
  ];

const usernameSchema =  zod.string();
const passwordSchema = zod.string().min(6);

function authenticator(req, res, next){
    const username = req.body.username;
    const password = req.body.password;

    if(!usernameSchema.safeParse(username).success || !passwordSchema.safeParse(password).success===true){
        return res.status(403).json({
            msg: "authentication failed"
        });
    }
    
    next();
}


function userExists(username, password){
    const user = ALL_USERS.find((user)=>{
        return (user.username===username && user.password===password)
    })
    
    return user!=undefined;
}

app.use(authenticator);

app.post("/sign_in", (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    if(!userExists(username, password)){
        return res.status(411).json({
            msg: "Authentication failed"
        });
    }
    
    const token = jwt.sign({username: username}, jwtPassword);

    res.status(200).json({
        token: token
    });
})

app.get("/users", (req,res)=>{
    const token = req.headers.authorization;
    const jsonData = jwt.decode(token);

    if(!jwt.verify(token, jwtPassword)){
        return res.status(411).send({
            msg: "Authorization Failed"
        });
    }

    return res.status(200).json({
        user: ALL_USERS.filter((user)=>{
            if(user.username===jsonData.username){
                return false;
            }
            return true;
        })   
    });
})

app.get("/*", (req, res)=>{
    res.status(400).json({
        msg: "Route not found"
    })
})

app.listen(3000);