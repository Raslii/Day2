var mongoose = require('mongoose')
// schema creation 
var studentSchema = mongoose.Schema({
    Name:String,
    Place:String,
    Age:Number,
    Department:String
});
// model creation
// var studentModel = mongoose.model("collectionName,studentschema")
var studentModel = mongoose.model("student",studentSchema);
// exporting the model
module.exports = studentModel;
