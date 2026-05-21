// Import mongoose
import mongoose, { mongo } from "mongoose"
const Schema = mongoose.Schema

// Create a user schema
const userShcema = new Schema({
    // Soft Delete/Remove
    removed: {
        type: Boolean,
        default: false
    },
    // Account Status
    enabled: {
        type: Boolean,
        default: false,
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    name: {
        type: String,
        required: true,
        minlenght: [3, 'Name must be 3 characters Long']
    }, surname: {
        type: String,
        minlenght: [3, 'Surname must be 3 characters Long']
    },
    photo: {
        type: String, // URL from Cloudinary
        trim: true
    },
    role: {
        type: String,
        default: 'employee',
        enum: ['owner', 'admin', 'manager', 'employee']
    },
},
    { timestamps: true })

// Export user Schema
const User = mongoose.model('user', userShcema);
export default User