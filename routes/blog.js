const express = require('express')
const path=require("path")
const router = express.Router()

router.get('/', (req, res)=>{
   
    // res.sendFile(path.join(__dirname,"../templates/index.html"));
     res.render("../views/index")
    // res.render("home")
})
router.get('/blog', (req, res)=>{
   
    // res.sendFile(path.join(__dirname,"../templates/index.html"));
    // res.render("../views/home")
    res.render("bloghome")
})

module.exports=router