const express=require('express');
const router=express.Router();

const v1ApiRoutes=require('./v1/index');
// console.log(req.body);
router.use('/v1',v1ApiRoutes);
module.exports=router;