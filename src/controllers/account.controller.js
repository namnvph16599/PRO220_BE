import accountModel from '../models/account.model'
import bcyrpt from 'bcrypt'

export const listAccount = async (req,res)=>{
    try {
        const data = await accountModel.find()
        res.json(data)
    } catch (error) {
        res.status(400).json({
            message:error
        })
    }
}

export const addAccount = async (req,res)=>{
    try {
        const checkEmail = await accountModel.findOne({email:req.body.email})
        if (checkEmail) {
            return res.json({
                message:'email đã tồn tại'
            })
        }
        const passwordVerify = bcyrpt.hashSync(req.body.password, 10)
        const data = await accountModel({...req.body,password:passwordVerify}).save()
        res.json(data)
    } catch (error) {
        res.status(400).json({
            message:error
        })
    }
}

export const deleteAccount = async(req,res)=>{
    try {
        const data = await accountModel.findOneAndDelete({_id:req.params.id})
        res.json(data)
    } catch (error) {
        res.status(400).json({
            message:error
        })
    }
}

export const updateAccount = async(req,res)=>{
    try {
        const data = await accountModel.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        res.json(data)
    } catch (error) {
        res.status(400).json({
            message:error
        })
    }
}