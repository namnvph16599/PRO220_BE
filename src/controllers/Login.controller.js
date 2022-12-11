import { accountServices } from '../services'
import bcyrpt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const login = async (req,res)=>{
    try {
        const checkEmail = await accountServices.getEmail(req.body.email)
        if (!checkEmail) {
            return res.json({
                message:'email chưa tồn tại'
            })
        }
        const comparePassword = bcyrpt.compareSync(req.body.password,checkEmail.password)
        if (!comparePassword) {
            return res.json({
                message:'mật khẩu sai vui lòng nhập lại'
            })
        }
        const accessToken = jwt.sign({
            id:checkEmail.id,
            name:checkEmail.name,
            role:checkEmail.role
        },
        "secretkey",
        {expiresIn:100}
        )
        res.cookie('accessToken',accessToken,{
            httpOnly:true,
            secure:true,
            path:'/',
            samesite:"strict"
        })
        res.status(200).json({
            accessToken
        })
    } catch (error) {
        res.status(400).json({
            message:error
        })
    }
}