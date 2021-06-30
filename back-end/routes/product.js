const express = require('express')
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review')
const multer = require('multer')


const FILE_TYPES = {
    'image/png': 'png',
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg'
}
const storage  = multer.diskStorage({
    destination: function(req,file,cb){
        const isValid = FILE_TYPES[file.mimetype];
        let err = new Error('Invalid Image Type');
        if(isValid){
            err = null
        };
        cb(err,'public/upload');
    },
    filename: function(req,file,cb){
        const extension = FILE_TYPES[file.mimetype];
        const fileName = file.originalname.split(' ').join('-');
        cb(null, `${fileName}-${Date.now()}.${extension}`);
    }
})
const upload = multer({storage:storage});

router.route('/get').get(async (req, res) => {
    const products = await Product.find()
        .populate({
            path: 'subcategory2', populate: {
                path: 'subcategory', populate: { path: 'category' }
            }
        })
        .populate({
            path: 'reviews', 
            // populate:{
            //     path:'user'
            // }
        })
        .catch(err => res.status(400).json({ success: false, message: 'Unable to get product lists, something went wrong' }))

    if (!products) {
        res.status(400).json({ success: false, message: 'Unable to get product lists' })
    }
    else {
        res.status(200).json({ products: products })
    }
})

router.route('/add').post(upload.single('image'),(req, res) => {
    const fileName = req.file.filename;
    const basePath = `${req.protocol}://${req.get('host')}/public/upload/`
    const file = req.file
    if (!file){
        return res.status(500).json({ success: false, message: "category not found" })
    }
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        oldPrice: req.body.price,
        seller: req.body.seller,
        subcategory2: req.body.subcategory2,
        image: `${basePath}${fileName}`,
        countInStock: req.body.countinstock,
        detail: req.body.detail,
        specification: req.body.specification,
    })

    product.save()
        .then(result => {
            result ? res.status(200).json({ product: result }) : res.status(400).json({ success: false, message: 'Unable to add product' });
        })
        .catch()
})

router.route('/remove/:id').delete((req, res) => {
    Product.findByIdAndRemove(req.params.id)
        .then(result => {
            result ? res.status(200).json({ success: true, message: 'Product removed' }) : res.status(400).json({ success: false, message: 'Unable to remove product' });
        })

        .catch(err => res.status(400).json({ success: false, message: 'Unable to add product, something went wrong' }))
})

router.route('/review/:id').put(async (req, res) => {
    // const { userId } = req.user;
    let reviewId = ''
    const review = new Review({
        product: req.params.id,
        review: req.body.review,
        user: req.body.user,
        summary: req.body.summary,
        rating: req.body.rating
    });
    await review.save()
        .then(result => {

            result ? reviewId = result.id : res.status(400).json('Unable to create review ')
        })
        .catch(err => res.status(400).json({ success: false, message: "Unable to create review, Somthing went wrong" }))

    console.log(reviewId)

    const product = await Product.findByIdAndUpdate(req.params.id,
        {
            $push: { reviews: reviewId }
        },
        {
            new: true
        }
    )
    .catch(err=>res.status(200).json(err))

    if(!product)
        return res.status(400).json({success: false, message: 'Unable to reveiw this product' })
    
    else
        return res.status(200).json(product)
})



module.exports = router


