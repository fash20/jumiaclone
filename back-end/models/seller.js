const mongoose = require('mongoose');
const { schema } = require('./user');




const sellerSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type:String,
        default:''
    },
    passwordHash:{
        type: String,
        required: true
    },
    product:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }],
    followers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    }],
    ratng:{
        type: String,
        default:''
    },
    qualityscore:{
        type:String,
        default:''
    }

})

const Seller = mongoose.model('Seller', sellerSchema)
module.exports = Seller