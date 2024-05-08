require("dotenv").config();
const path = require("path")
const express = require("express");
const cors = require("cors")
const connectDB = require("./config/dbConnect");
const shortenUrl = require(path.join(__dirname, "routes", "url.js"))
const openUrl = require(path.join(__dirname, "routes", "index.js"))
const app = express()
app.use(express.json())
const PORT = 4000 || process.env.PORT
const url = process.env.MONGODB_URI
// const corsOptions = {
//     origin: 'https://youshorten.vercel.app/',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }
  app.use(
    cors({
    origin: "https://youshorten.vercel.app",
    credentials: true, 
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: [
    "Origin",
    "Content-Type",
    "Accept",
    "Authorization",
    "X-Request-With",
    ],
    })
    );
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