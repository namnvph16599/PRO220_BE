import mongoose from 'mongoose';
var mongoose_delete = require('mongoose-delete');

const orderSchema = mongoose.Schema({
    name: {
        type: String
    },
    addresses: {
        type: String
    },
    phone: {
        type: String
    },
    status: {
        type: String
    },
    price: {
        type: Number
    },
    subPrice: {
        type: Number
    },
    total: {
        type: Number
    },
    date: {
        type: Date,
    },
    serviceType: {
        type: String,
    },
    description: {
        type: String,
    },
    eventId: {
        type: mongoose.ObjectId,
        ref: 'eventId'
    },
    userId: {
        type: mongoose.ObjectId,
        ref: 'userId',
    },
    showroomId: {
        type: mongoose.ObjectId,
        ref: 'showroomId',
    },
    materialIds: {
        type: mongoose.ObjectId,
        ref: 'materialIds',
    },
}, {
    timestamps: true,
}, );

// export default mongoose.model('Order', orderSchema) //no cai nay xoa r ma???
orderSchema.plugin(mongoose_delete);

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;