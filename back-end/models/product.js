const mongooes = require ('mongoose');


const productSchema = mongooes.Schema({
    name: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
        default: 0
    },
    oldPrice:{
        type: Number,
        default: 0
    }, 
    seller:{
        type: mongooes.Schema.Types.ObjectId,
        ref:'Seller',
        required:'true'
    },
    subcategory2:{
        type: mongooes.Schema.Types.ObjectId,
        ref:'SubCategory2',
        required: true
    },
    image:{
        type: String,
        default:''
    },
    images:[{
        type: String,
        deault:''
    }],
    countInStock: {
        type:Number, 
        required: true,
        min: 0
    },
    rating:{
        type: Number,
        default: 0
    },
    isFeatured:{
        type: Boolean,
        default: false
    },
    dateCreated:{
        type: Date,
        default: Date.now
    },
    specifications:{
        type: String,
        default:''
    },
    detail:{
        type: String,
        required: true
    },
    reviews:[{
        type: mongooes.Schema.Types.ObjectId,
        ref:'Review',
    }],
})

productSchema.virtual('id').get(function(){
    return this._id.toHexString();
})

productSchema.set('toJSON',{
    virtuals: true
})

const Product = mongooes.model('Product', productSchema);

module.exports = Product;