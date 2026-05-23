import jwt from "jsonwebtoken"

// Create a function to generate an access token
export const generateAccessToken = (userId, role) => {
    return jwt.sign(
        // Payload
        { id: userId, role },
        // secret
        process.env.JWT_ACCESS_TOKEN_SECRET,
        // options 
        { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES }
    )
}

// Create a function to generate a refresh token
export const generateRefreshToken = (userId) => {
    return jwt.sign(
        // Payload
        { id: userId },
        // Secret
        process.env.JWT_REFRESH_TOKEN_SECRET,
        // options
        { expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES }
    )
}
