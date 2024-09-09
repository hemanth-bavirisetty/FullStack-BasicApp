import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'user already exists'],
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'password must be atleast 8 characters long'],
        maxLength: [20, 'password must be atmost 20 characters long']
    }
});

export const User = mongoose.model('User', userSchema);