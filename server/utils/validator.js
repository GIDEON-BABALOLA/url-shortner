const path = require("path")
const Url = require(path.join(__dirname, "..", "model", "url.js"))
const validator = async (url) => {
const alreadyUrlCode = await Url.findOne({urlCode : url})
if(alreadyUrlCode){
    return true
}else{
    return false
}
}
module.exports = validator