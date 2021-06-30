
const errorHandelr = (err,req,res,next) =>{
    if (err.name === 'UnauthorizedError')
        return res.status(401).json({success: false ,message:'AUTHORIZATION FAILED'});
    if (err.name === 'ValidationError')
        return res.status(401).json({success: false ,message:'VALIDATION ERROR'});
    return res.status(400).json({success: false ,message:"Something Went Wrong", err: err.name})

}

module.exports = errorHandelr;