import mongoose from 'mongoose';

const accountSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        number_phone: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        showroomId:{
            type:String,
        },
        role: {
            type: Number,
        },
    },
    { timestamps: true },
);
const AccountModel = mongoose.model('Account', accountSchema);
module.exports = AccountModel;
