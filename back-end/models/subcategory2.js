const mongoose = require('mongoose')


const subCategory2Schema = mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique:true
    },
    subcategory:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'SubCategory1',
        required: true
    }
})
subCategory2Schema.virtual('id').get(function(){
    return this._id.toHexString();
});
subCategory2Schema.set('toJSON',{
    virtuals: true
})

const SubCategory2 = mongoose.model('SubCategory2',subCategory2Schema);

module.exports = SubCategory2