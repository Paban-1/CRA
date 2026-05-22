// Import mongoose
import mongoose from "mongoose"
const { Schema } = mongoose

// Create a user schema
const userSchema = new Schema({
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
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true,
        minlength: [3, 'Name must be 3 characters Long']
    }, surname: {
        type: String,
        minlength: [3, 'Surname must be 3 characters Long']
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
    { timestamps: true }
)


// Auto filter to removed users from all queries to only gets active users
userSchema.pre(/^find/, function (next) {
    this.where({ removed: false })
    next()
})

// Export user Schema
const user = mongoose.model('user', userSchema);
export default user