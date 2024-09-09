import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    orderItems: [{
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        }
    }],
    shippingAddress1: { type: String, required: true },
    shippingAddress2: { type: String },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true },
    status: { type: String, default: 'Pending' },
    totalPrice: { type: Number },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
})