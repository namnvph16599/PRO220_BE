import accountModel from '../models/account.model';

export const getAll = async () => {
    return accountModel.find();
};

export const getById = async (_id) => {
    return await accountModel.findOne({ _id }).exec();
};

export const create = async (data) => {
    return await new accountModel(data).save();
};

export const removeById = async (_id) => {
    return await accountModel.findOneAndDelete({ _id }).exec();
};

export const updateById = async (_id, data) => {
    return await accountModel.findOneAndUpdate({ _id }, data, { new: true });
};

export const getEmail = async (data) => {
    return await accountModel.findOne({ email:data });
};