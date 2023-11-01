const catchAsync = require("../utils/catchAsync");
const Message=require('../Models/reviewModel');
exports.SendMessage=catchAsync(async(req,res)=>{
    const newReview =await Message.create({
        userId:req.body.userId,
        name: req.body.name,
        email: req.body.email,
        message:req.body.message,

    });

    res.status(201).json({
        status: 'success',
        data:{
            review:newReview
        }
    })
})