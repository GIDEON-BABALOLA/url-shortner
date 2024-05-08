require("dotenv").config();
const path = require("path")
const express = require("express");
const connectDB = require("./config/dbConnect");
const shortenUrl = require(path.join(__dirname, "routes", "url.js"))
const openUrl = require(path.join(__dirname, "routes", "index.js"))
const app = express()
app.use(express.json())
const PORT = 4000 || process.env.PORT
const url = process.env.MONGODB_URI
app.use("/api/url/shorten", shortenUrl);
app.use("/", openUrl)
connectDB(url).then(() => {
    app.listen(PORT,  () => {
        console.log(`server is running on PORT ${PORT}`)
    })
}).catch((error) => {
    console.log(error)
    console.log("Error in connecting to database")
})