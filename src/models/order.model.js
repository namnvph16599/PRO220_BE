import mongoose from 'mongoose';

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

const OrderModel = mongoose.model('OrderModel', orderSchema);

module.exports = OrderModel;