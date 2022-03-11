const express=require('express');
const router=express.Router();
const home=require('../controller/home');
router.post('/payment',home.referal);
module.exports=router;