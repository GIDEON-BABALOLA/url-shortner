const express = require("express")
const router = express.Router()
const path = require("path")
const Url = require(path.join(__dirname, "..", "model", "url.js"))
const validator = require(path.join(__dirname, "..", "utils", "validator.js"))
const { nanoid } = require("nanoid")
const validUrl = require("valid-url")
const baseUrl = process.env.BASE_URL
router.post("/",  async (req, res) => {
if(!validUrl.isUri(baseUrl)){
     return res.status(400).json({message : "Invalid Base url", success : "false"})
}
const  { longUrl } = req.body;
if(!validUrl.isUri(longUrl)){
    return res.status(400).json({message : "Invalid long url", success : "false"})
}
try{
const alreadyUrl = await Url.findOne({longUrl : longUrl})
if(alreadyUrl){
return res.status(200).json(alreadyUrl)
}else{
    let urlCode = nanoid(7)
    if(validator(urlCode)){
urlCode = nanoid(7)
    }
    const shortUrl = baseUrl + "/" + urlCode
    const newUrl = new Url({
        longUrl,
        shortUrl,
        urlCode,
        date : new Date()
    })
    await newUrl.save()
    res.status(201).json(newUrl)
}
}catch(err){
    console.log(err)
res.status(500).json({message : "Internal Server Error", success : false})
}
})
module.exports = router