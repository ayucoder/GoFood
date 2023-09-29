const express = require('express')

const router = express.Router()
router.post('/foodData',(req,res)=>
{

    console.log('global.fooditems API', global.fooditems)
    try{
        res.send([global.fooditems,global.foodCategory])
    }
    catch(error)
    {
        console.error(error.message)
        res.send("Server Error")
    }
})
module.exports = router