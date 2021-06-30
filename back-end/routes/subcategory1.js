const express = require('express');
const verifyToken = require('../helpers/verify-token');
const Category = require('../models/category');
const router = express.Router();
const Subcategory1 = require('../models/subcategory1');


router.route('/get').get(async (req, res) => {
    const subcategories = await Subcategory1.find().populate({path:'category'})
        .catch(err => res.status(400).json({ success: false, message: 'Unable to get subcategory1 lists, something went wrong' ,err}))

    if (!subcategories) {
        res.status(400).json({ success: false, message: 'Unable to get subcategory1 lists' })
    }
    else {
        res.status(200).json({ subcatgories1: subcategories })
    }
})
router.route('/add').post(async (req, res) => {
    let category = await Category.findById(req.body.categoryId)
        .catch(err => res.status(400).json({ success: false, message: 'Category doesnot exit, something went wrong',err }))
    if (!category) {
        return res.status(400).json({ success: false, message: 'Category doesnot exit' })
    }
    else {
        let subcategory1 = new Subcategory1({
            name: req.body.name,
            category: req.body.categoryId,
        })
        subcategory1 = await subcategory1.save()
            .catch(err => res.status(400).json({ success: false, message: 'Unable to add subcategory1 something went wrong', err }))
        if (!subcategory1) {
            res.status(400).json({ success: false, message: "Unable to add subcategory1" })
        }
        else {
            res.status(200).json({subcategory1:subcategory1})
        }
    }
})
router.route('/remove/:id').delete((req,res)=>{
    Subcategory1.findByIdAndRemove(req.params.id)
    .then(result => res.status(200).json({success:true, message:'Item removed'}))
    .catch(err=> res.status(400).json({success:false,message:'unable to remove item', err}))
})



module.exports = router