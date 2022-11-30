import orderModel from "../models/order.model";

export const getAll = async (req, res) => {
    try {
        const data = await orderModel.find();
        res.json(data);
    } catch (error) {
        res.status(400).json({
            error: 'khong co don nao'
        })
    }
}

export const getById = async (req, res) => {
    try {
        const data = await orderModel.findOne({
            _id: req.params.id
        }).select("-__v").populate(req.query["_expand"]).exec();
        res.json(data);
    } catch (error) {
        res.status(400).json({
            error: 'khong tim thay don nao'
        })
    }
}

export const create = async (req, res) => {
    try {
        const data = await new orderModel(req.body).save();
        res.json(data)
    } catch (error) {
        res.status(400).json({
            error: 'khong them duoc'
        })
    }
}

export const removeById = async (req, res) => {
    try {
        const data = await orderModel.findOneAndDelete({
            _id: req.params.id,
        }).exec()
        res.json(data)
    } catch (error) {
        res.status(400).json({
            error: 'khong xoa duoc'
        })
    }
}

export const updateById = async (req, res) => {
    try {
        const data = await orderModel.findOneAndUpdate({
            _id: req.params.id
        }, req.body, {
            new: true
        })
        res.json(data)
    } catch (error) {
        res.status(400).json({
            error: 'khong sua duoc'
        })
    }
}