const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

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

function userExists(username, password) {
//   for(let i=0;i<ALL_USERS.length;i++){
//     if(ALL_USERS[i].username===username && ALL_USERS[i].password===password){
//         return true;
//     }
//   }

  const ans = ALL_USERS.find((user)=>{
    if(user.username===username && user.password===password){
        return true;
    }
    return false;
  })
  
  return ans!==undefined;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    return res.json({
        users: ALL_USERS.filter((user)=>{
            if(user.username===decoded.username){
                return false;
            }
            return true
        })
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)