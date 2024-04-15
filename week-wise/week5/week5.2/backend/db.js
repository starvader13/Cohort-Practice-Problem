const mongoose = require("mongoose")
require('dotenv').config();

const mongodbURL = process.env.MONGODB_URL_STRING;

mongoose.connect(mongodbURL).then(()=>{
    console.log("Connected Successfully");
}).catch(()=>{
    console.log("Connection failed");
});

const todoDbSchema = {
    title: String,
    description: String,
    completed: Boolean
};

const todo = mongoose.model('todos', todoDbSchema);

module.exports = {
    todo
}