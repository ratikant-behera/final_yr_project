    const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    role : {
        type : String ,
        default : 'user',
    },
    resetToken: {
        type : String,
    },
    resetTokenExpire:{
        type : Date
    }
})

module.exports = mongoose.model('UserAuth',userSchema);