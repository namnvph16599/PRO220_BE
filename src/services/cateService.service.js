import { cateServiceModle } from '../models';

export const getAll = async () => {
    return await cateServiceModle.find();
};

export const getById = async (_id) => {
    return await cateServiceModle.findOne({ _id }).exec();
};

export const create = async (data) => {
    return await new cateServiceModle(data).save();
};

export const removeById = async (_id) => {
    return await cateServiceModle.findOneAndDelete({ _id }).exec();
};

export const updateById = async (_id, data) => {
    return await cateServiceModle.findOneAndUpdate({ _id }, data, { new: true });
};
