import mongoose from "mongoose";
const { Schema } = mongoose
import bcrypt from 'bcryptjs'

const userAuthSchema = new Schema({
    // Soft delete
    removed: {
        type: Boolean,
        default: false
    },
    // Link to the user model
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: true,
        unique: true
    },
    // Password
    password: {
        type: String,
        required: true,
        select: false
    },
    // Email verification
    emailToken: {
        type: String,
        select: false
    },
    emailTokenExpiry: {
        type: Date,
        select: false
    },
    emailVerified: {
        type: Boolean,
        default: false,
    },

    // Password reset
    resetToken: {
        type: String,
        select: false,
    },
    resetTokenExpiry: {
        type: Date,
        select: false,
    },

    // Auth Type and loggin sessions
    authType: {
        type: String,
        default: 'email'
    },
    loggedSessions: {
        type: [String],
        default: []
    }
}, { timestamps: true })

const userAuth = mongoose.model('userAuthSchema', userAuthSchema)
export default userAuth