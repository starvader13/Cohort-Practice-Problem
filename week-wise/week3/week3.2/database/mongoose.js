const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:mongodbaccess22@cluster0.s7pwrdc.mongodb.net/userappnew")

const Users = mongoose.model('Users', {
    name: String,
    email: String,
    password: String
});

const user = new Users({
    name: "Ashutosh",
    email: "dfivib@gmail.com",
    password: "fidviub"
});

user.save().then()