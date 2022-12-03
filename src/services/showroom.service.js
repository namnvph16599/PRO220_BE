import mongoose from "mongoose";
import { showroomModel } from "../models";
export const getAll =  () => {
    return  showroomModel.find({ deleted: false });
}

export const getById = (_id) => {
    return showroomModel.findOne({
        _id, deleted :false
    }).exec();
}

export const create = (data) => {
    const dataShowroom = {
        name:data.name,
        phone:data.phone,
        address:data.address,
        images:data.images,
        location: {
            type: 'Point',
            coordinates: [
              parseFloat(data.longitude),
              parseFloat(data.latitude)
            ]
        }
    }
    return new showroomModel(dataShowroom).save()
}

export const removeById = async (_id) => {
    const showroomId = mongoose.Types.ObjectId(_id);
    showroomModel.delete({ _id: showroomId },(err,rs) => {});
}

export const updateById = (_id, data) => {
    return showroomModel.findOneAndUpdate({ _id, deleted: false }, data, { new: true });
}