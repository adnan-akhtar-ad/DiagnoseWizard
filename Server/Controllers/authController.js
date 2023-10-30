const jwt=require('jsonwebtoken');
const User=require('./../Models/userModel');
const catchAsync=require('./../utils/catchAsync');
const AppError=require('./../utils/appError');
const Cryption=require('../utils/Cryption');
const nodemailer = require("nodemailer");

const signToken=id=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_IN
    });
}

exports.signup=catchAsync(async(req,res,next)=>{
    const newUser =await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    });
    const token=signToken(newUser._id);

    res.status(201).json({
        status: 'success',
        token,
        data:{
            user:newUser
        }
    })
})

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new AppError('Please provide email and password', 400));
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password', 401));
    }
    const token = signToken(user._id);

    res.status(200).json({
        status: 'success',
        token,
        data:  Cryption.encrypt(user._id.toString()) // Convert ObjectId to string
        
    });
});


exports.forgotPassword= catchAsync(async(req,res,next)=>{
    const email= "karthikkota123456@gmail.com";
    console.log(email);
    if (!email ){
        return next(new AppError('Please provide email', 400));
    }
    const user = await User.findOne({ email });
    if (!user) {
        return next(new AppError('Account with this email Id doesnt exist', 401));
    }
    let testAccount=await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'karthikkotakk@gmail.com',
            pass: 'youonlyliveonce@123456'
        }
    });
    const generateOTP=()=> {
        var minm = 100000;
        var maxm = 999999;
        return Math.floor(Math
        .random() * (maxm - minm + 1)) + minm;
    }
    let OTP = (generateOTP()).toString();
    const info = await transporter.sendMail({
        from: '"DiagnoseWizard" <karthikkotakk@gmail.com>', 
        to: "karthikkota123456@gmail.com",
        subject: "Email verification - DiagnoseWizard", 
        text: `The OTP for your account verification is ${OTP}`, 
        // html: "<b>Hello world?</b>", // html body
      });

      res.status(200).json({
        status: 'success',
        data: {
         "OTP":OTP
        } 
        
    });
    

})

