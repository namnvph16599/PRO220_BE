import jwt from 'jsonwebtoken'
import { roleService } from '../services';

export const verifyToken=(req,res,next)=>{
    const token = req.headers.token
    if (token) {
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken,process.env.JWT_ACCESS_KEY,(error,user)=>{
            if (error) {
               return res.status(401).json({
                    message:"Token is not valid!"
                })
            }
            req.user = user
            next()
        })
    }else{
        res.status(402).json("You're not authenticated")  
    }
}

export const verifyAndAdminAuth = async (req,res,next)=>{
    const listRole = await roleService.listRole()
    let arr = []
    listRole.forEach(element => {
        arr.push(element.name)
    });
    verifyToken(req,res,()=>{
        if (arr.includes(req.user.role)) {
            req.user = req.user
            next()
        }else{
           return res.status(403).json({
                message:"You're not allowed!"
            })
        }
    })
}
