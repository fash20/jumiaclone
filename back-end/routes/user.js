const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { token } = require('morgan');
const secret = process.env.JWT;
const verifyToken = require('../helpers/verify-token')


router.route('/register').post(async (req, res) => {
    let user = new User({
        email: req.body.email,
        passwordHash: await bcrypt.hash(req.body.password, 10),
        address: req.body.address,
        phone: req.body.phone,
        firstname:req.body.firstname
    })
    user = await user.save()
        .catch(err => res.status(500).json({ sucess: false, message: `${err.keyValue.phone} already taken` ,err}))

    !user ? res.status(500).json({ sucess: false }) : res.status(200).json({ user })

})
router.route('/get').get(async (req, res) => {
    const users = await User.find().populate({
        path: 'following' 
    })

    users ? res.status(200).json(users) : res.status(400).json({ sucess: false })

})
router.route('/login').post(async (req, res, payload) => {
    const user = await User.findOne({ email: req.body.email })
        .catch(err => res.json({
            message: 'Something went wrong',
            success: false
        }))
    if (!user) {
        res.status(400).json({
            success: false,
            meassage: 'email or password incorrect'
        })
    }
    // userId = jwt.verify(token, secret);
    // console.log(userId)

    if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
        const token = jwt.sign(
            {
                userId: user.id,
                isAdmin: user.isAdmin
            },
            secret,
            {
                expiresIn: '1d'
            }
        )

        res.status(200).json({
            success: true,
            token: token,

        })
    }

})
router.route('/remove/:id').delete((req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then((user) => {
            if (user)
                return res.status(200).json({
                    success: true,
                    message: 'item deleted'
                })
            else
                return res.status(404).json({
                    success: false,
                    message: 'item not found'
                })
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                err
            })
        })
})
router.route('/:id').get((req, res) => {
    User.findById(req.params.id).select()
        .then((user) => {
            if (user)
                return res.status(200).json({
                    user
                })
            else
                return res.status(404).json({
                    success: false,
                    message: 'user not found'
                })
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                err
            })
        })
})
router.route('/get/count').get(async (req, res) => {
    const userCount = await User.countDocuments(count => count)
    if (!userCount)
        return res.status(500).json({
            success: false,
            message: 'Unable to get Product count'
        })
    return res.status(200).json({ userCount: userCount })

})

router.route('/:id').put(async (req, res) => {
    let user = await User.findByIdAndUpdate(req.params.id,
        {
            email: req.body.email,
            phone: req.body.phone,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            gender: req.body.gender,
            dob: req.body.dateofbirth
        },
        { 
            new: true 
        }
    )
    if (!user)
        return res.status(500).json({
            success: false,
            message: 'Unable to update user'
        })
    return res.status(200).json({ user: user })
})
router.put('/follow/:id', verifyToken, async (req, res) => {
    const { userId } = req.user;
    const findUser = await User.findById(req.params.id)
        .catch(err => res.json({ success: 'false' }))
    if (!findUser) {
        return res.sendStatus(403).json({
            success: false,
            message: 'User does not exist'
        })
    }
    const user = await User.findById(userId).catch(err => res.status(500).json({ err: err }))
    const following = user.following;
    let exits = false;
    if (req.params.id !== userId) {

        if (user.following.length !== 0) {
            user.following.map(item => {
                const id = req.params.id;
                if (item  ==  id ) {
                    exits = true;
                    res.status(403).json({message: 'already following this user'})
                }
            })
            if (exits === false) {
                let newuser = await User.findByIdAndUpdate(userId,
                    {
                        $push: { following: req.params.id }
                    },
                    {
                        new : true
                    }
                ).catch(err=> res.json({err}))
                res.json({exits: exits ,following: newuser.following})

            }
        }
        else {
            const user1 = await User.findByIdAndUpdate(userId,
                {
                    $push: { following: req.params.id }
                },
                {
                    new: true
                }
            )
            .catch(err=>res.json(err))

              res.json({ exits: exits, following: user1.following })
        }

      
    }
    else{
        res.status(401).json({message: 'you cannot follow yourself'})
    }
})

router.route('/add/address').put((req,res)=>{
    User.findByIdAndUpdate(req.pramas.id,{
        $push: {addresses: req.body.address }
    },
    {
        new: true
    }
    )
    .then(result=>{
        result ? res.status(200).json({user:result}): res.status(400).json({success:false, message: 'Unable to add Address'})
    })
    .catch(err=> res.status(400).json({success:false, message: 'Unable to add Address, something went wrong'}))
})

module.exports = router