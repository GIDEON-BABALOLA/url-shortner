const path = require("path")
const Url = require(path.join(__dirname, "..", "model", "url.js"))
const express = require("express")
const router = express.Router()

router.get("/:code", async (req, res) => {
    const { code } = req.params;
    try{
        const url = await Url.findOne({ urlCode : code})
        if(url){
          return res.redirect(url.longUrl)
        }else{
          return  res.status(400).json({message : "Invalid Url", success : false})
        }
    }catch(err){
        console.log(err)
        res.status(500).json({message : 'Internal Server Error', success : "false"})
    }
})
module.exports = router
