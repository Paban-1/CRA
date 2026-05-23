export class AppError extends Error {
    constructor(message, statusCode) {
        // super to pass message to the parent class (Error)
        super(message)
        // status code
        this.statusCode = statusCode
        // operational ?
        this.isOperational = true
    }
}