const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const Cryption = require('./../utils/Cryption');
const bcrypt = require('bcryptjs');
const SendMail = require('./../utils/SendMail');
const User = require('./../Models/userModel');
const generateOTP=require('./../utils/generateOTP');
exports.updatePassword = catchAsync(async (req, res) => {
    try {
        const text = {
            "iv": req.params.iv,
            "encryptedData": req.params.encryptedData
        }

        const user_id = Cryption.decrypt(text);


        const newPassword = await bcrypt.hash(req.body.password, 12);

        const user = await User.findByIdAndUpdate(user_id, { "password": newPassword }, {
            new: true,
            runValidators: true,
        });


        const userDetails = await User.findById(user_id);
        const otp=generateOTP();
        SendMail(userDetails.email,otp,userDetails.name, "changePassword");

        res.status(200).json({
            status: "success",
            data: {
                user,
            }
        });
    } catch (err) {
        console.error("Unable to update password:", err); // Log the error
        res.status(400).json({
            status: "error",
            message: "Unable to update password",
        });
    }
});


exports.forgotPassword = () => {

}

