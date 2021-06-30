const mongoose = require ('mongoose');


const reviewSchema = mongoose.Schema({
    product : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required: true
    },
    review: {
        type: String,
        default: ''
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required: true,
    },
    summary:{
        type: String,
        default:'',
    },
    rating:{
        type: Number,
        default: 0,
        required: true
    },
    date: {
        type: Date,
        default:Date.now()
    }
})

reviewSchema.virtual('id').get(function(){
    return this._id.toHexString();
})

reviewSchema.set('toJSON',{
    virtuals: true
})


const Review = mongoose.model('Review', reviewSchema);
module.exports = Review