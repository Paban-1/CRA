// Import models
import User from '../models/coreModels/user.model.js'
import UserAuth from '../models/coreModels/userAuth.model.js'
import { AppError } from '../utils/error.utils.js'

// Regiseter a new user
export const register = async (req, res) => {
    // try chatch block to handle errors
    try {
        const { email, name, surname, password } = req.body

        // check for exitsing user with the same email
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' })
        }

        // Create new user
        const createdUser = await User.create({
            email,
            name,
            surname,
        })

        // hash password
        const userAuthDoc = new UserAuth()
        const hashedPassword = await userAuthDoc.generateHash(password)

        // generate eamil verification token
        const emailToken = crypto.randomBytes(32).toString('hex')
        emailTokenExpiry = Date.now() + 24 * 60 * 60 * 1000 // 24 hours

        await UserAuth.create({
            user: createdUser._id,
            password: hashedPassword,
            emailToken,
            emailTokenExpiry
        });

        // send verification email Added soon
        return res.status(201).json({
            success: true,
            message: 'Registration successful! Please check your email to verify your account'
        })
    } catch (error) {
        throw new AppError('Failed to register user', 409)
    }
}
