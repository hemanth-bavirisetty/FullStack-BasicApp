import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    /**
     * 
     */
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
});
export const Product = mongoose.model('Product', productSchema)