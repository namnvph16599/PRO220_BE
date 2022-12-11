import jwt from 'jsonwebtoken'

export const verifyToken=(req,res,next)=>{
    const token = req.headers.token
    if (token) {
        const accessToken = token
        jwt.verify(accessToken,"secretkey",(error,user)=>{
            if (error) {
               return res.status(402).json({
                    message:'không có token'
                })
            }
            req.user = user
            next()
        })
    }else{
        res.status(402).json("không có token")  
    }
}

export const verifyAndAdminAuth = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if (req.user.role == 1) {
            next()
        }else{
           return res.json({
                message:'bạn không phải admin'
            })
        }
    })
}
