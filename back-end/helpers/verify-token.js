const e = require('express');
const jwt = require('jsonwebtoken');
const verifyToken = (req,res,next) =>{
    const authHeader = req.headers.authorization;

    if(authHeader){
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.JWT, function (err, user){
            if (err){
                return res.status(403).json({message:'token verification failed'});
            }
            req.user = user;
            next()
        });

    }
    else {
        res.sendStatus(401)
    }

}

module.exports = verifyToken;