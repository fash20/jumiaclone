const expressjwt = require('express-jwt');
const secret = process.env.JWT;


const auth = () => {
    return expressjwt ({
        secret,
        algorithms:['HS256'],
        isRevoked: isRevoked
    }).unless({
        path:[
            '/',
            '/customer/login',
            '/customer/register',
            {url:/\/product(.*)/, methods:['GET','OPTIONS']},
        ]
    })
}
const isRevoked = async (req, payload, done)=>{
    if(!payload.isAdmin){
        done(null,true)
    }
    done()
}
module.exports = auth;