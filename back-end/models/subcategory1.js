const mongoose = require('mongoose')


const subCategory1Schema = mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique:true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required: true
    }
})
subCategory1Schema.virtual('id').get(function(){
    return this._id.toHexString();
});
subCategory1Schema.set('toJSON',{
    virtuals: true
})

const SubCategory1 = mongoose.model('SubCategory1',subCategory1Schema);

module.exports = SubCategory1