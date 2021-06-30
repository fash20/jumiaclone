const mongoose = require('mongoose');



const userSchema = mongoose.Schema({
    email:{
        type: String,
        required:true,
        unique:true
    },
    passwordHash:{
        type: String,
        required: true
    },
    firstname:{
        type: String,
        default:''
    },
    lastname:{
        type: String,
        default:''
    }, 
    address:{
        type: String,
        required: true
    },
    addresses:[{
        type: String,
    }],
    phone:{
        type: String,
        unique: true
    },
    gender:{
        type: String,
        default: ''
    },
    dob:{
        type: Date,
        default: ''
    },
    orderitems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'OrderItem'
    }],
    saveditem:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product',
    }],
    vieweditem:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product',
    }],
    following:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    }],
    isAdmin:{
        type:Boolean,
        default:false,
    }
})

userSchema.virtual('id').get(function(){
    return this._id.toHexString();
})
userSchema.set('toJSON',{
    virtuals: true
})

const User = mongoose.model('User', userSchema);
module.exports = User;