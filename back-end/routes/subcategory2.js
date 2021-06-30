const express = require('express');
const verifyToken = require('../helpers/verify-token');
const SubCategory1 = require('../models/subcategory1');
const router = express.Router();
const Subcategory2 = require('../models/subcategory2');


router.route('/get').get(async (req, res) => {
    const subcategories = await Subcategory2.find().populate({path:'subcategory', populate:{
        path:'category'
    }})
        .catch(err => res.status(400).json({ success: false, message: 'Unable to get subcategory2 lists, something went wrong' }))

    if (!subcategories) {
        res.status(400).json({ success: false, message: 'Unable to get subcategory2 lists' })
    }
    else {
        res.status(200).json({ subcatgories2: subcategories })
    }
})
router.route('/add').post(async (req, res) => {
    let category = await SubCategory1.findById(req.body.subcategoryId)
        .catch(err => res.status(400).json({ success: false, message: 'SubCategory1 doesnot exit, something went wrong',err }))
    if (!category) {
        return res.status(400).json({ success: false, message: 'SubCategory1 doesnot exit' })
    }
    else {
        let subcategory2 = new Subcategory2({
            name: req.body.name,
            subcategory: req.body.subcategoryId,
        })
        subcategory2 = await subcategory2.save()
            .catch(err => res.status(400).json({ success: false, message: 'Unable to add subcategory2 something went wrong,the name '+err.keyValue.name +' Already Exits', }))
        if (!subcategory2) {
            res.status(400).json({ success: false, message: "Unable to add subcategory2" })
        }
        else {
            res.status(200).json(subcategory2)
        }
    }
})
router.route('/remove/:id').delete((req,res)=>{
    Subcategory2.findByIdAndRemove(req.params.id)
    .then(result => res.status(200).json({success:true, message:'Item removed'}))
    .catch(err=> res.status(400).json({success:false,message:'unable to remove item'}))
})



module.exports = router