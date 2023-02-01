const express = require('express')

const router = express.Router();

router.get('/',(res,req)=>{
    res.send('wiki Homepage')
})

router.get('/about',(res,req)=>{
    res.send('wiki about page')
})

module.exports = router