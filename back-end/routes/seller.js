const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const Seller  = require('../models/seller')
const verifyToken = require('../helpers/verify-token')


router.route('/get').get(async(req,res)=>{
    const seller = await Seller.find()
    .then(seller =>{
        !seller ? res.status(400).json({success: false, message: 'Unable to get seller list'})
        : 
        res.status(200).json({Sellers: seller})
    })
    .catch(err => res.status(500).json({success: false,message: 'Unble to get seller list, something went wrong'}))
})

router.route('/register').post(async (req,res)=>{
    const seller = new Seller({
        name: req.body.name,
        email: req.body.email,
        passwordHash: await bcrypt.hash(req.body.password, 10),

    })
    seller.save()
    .then(seller=>{
        if(!seller){
            res.status('400').json({success:false,message: 'Unable to create user'})
        }
        else{
            res.status(200).json({seller:seller})
        }
    })
    .catch(err=> res.status(400).json({success:false,message: 'Unable to create user'}))

})
router.route('/add/product').put(verifyToken, async (req,res)=>{
    const {sellerId} =verifyToken;

    

})



module.exports = router;