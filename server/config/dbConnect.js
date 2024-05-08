const mongoose = require("mongoose")
const connectDB = async(url) => {
    try{
const connection = await mongoose.connect(url)
return connection
    }catch(error){
        console.log(error)
        console.log("Error in connecting to databse")
        process.exit(1)
    }
}
module.exports = connectDB