const express = require('express');
const verifyToken = require('../helpers/verify-token');
const router = express.Router();
const Category = require('../models/category');


router.route('/get').get(async(req,res)=>{
    const categories = await Category.find()
        .catch(err=> res.status(400).json({success:false, message:'Unable to get category lists, something went wrong'}))

    if(!categories){
        res.status(400).json({success:false, message:'Unable to get category lists'})
    }
    else{
        res.status(200).json({catgories:categories})
    }
})
router.route('/add').post(async (req,res)=>{
   let category = new Category({
       name : req.body.name
   })
    category =await category.save()
        .catch(err=>res.status(400).json({success:false, message:'Unable to add category something went wrong'}))
    if(!category){
        res.status(400).json({success:false, message:"Unable to add category"})
    }
    else{
        res.status(200).json(category)
    }
})
router.route('/remove/:id').delete((req,res)=>{
    Category.findByIdAndRemove(req.params.id)
    .then(result => res.status(200).json({success:true, message:'Item removed'}))
    .catch(err=> res.status(400).json({success:false,message:'unable to remove item'}))
})

module.exports = router
