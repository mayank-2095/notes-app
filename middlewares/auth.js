const jwt = require('jsonwebtoken')

const auth = (req,res,next) =>{
    try {
        const token = req.header("Authorisation")
        if(!token) return res.status(400).json({msg : " Invalid Authentication"})

        jwt.verify(token , process.env.TOKEN_SERET , (err , user)=>{
            if(err) return res.status(400).json({msg : "AuthoriZation not Valid."})
            req.user = user;
            next()
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = auth