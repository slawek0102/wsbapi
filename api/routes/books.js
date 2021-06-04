const express = require("expres");
const router = express.Router();
// const mongoose = require('mongoose');





router.post('/add', (req, res, next)=>{
    console.log(req.body)
})



module.exports = router;
