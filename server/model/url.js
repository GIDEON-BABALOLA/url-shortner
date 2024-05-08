const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const urlSchema = new mongoose.Schema({
    longUrl:String,
    shortUrl: String,
    urlCode: {type : String, unique : true},
    date : {type : Date, default : Date.now()}
});

//Export the model
module.exports = mongoose.model('Urls', urlSchema);