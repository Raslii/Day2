// 1. mongoose install=> npm i mongoose
var mongoose = require("mongoose");
// mongoose.connect("url").then(()=>{}).catch(()=>{})
    mongoose.connect(
    "mongodb+srv://ezderruby:ezderruby@cluster0.esbl3wu.mongodb.net/Open26May?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
        console.log("Db connected")
     })
     .catch(() =>{
        console.log("err")
     } );