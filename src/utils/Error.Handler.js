

export class AppError extends Error{
    /**
     * Constructor for creating an instance of AppError.
     *
     * @param {string} message - The error message.
     * @param {number} status - The status code of the error.
     */
    constructor(message,status){
        super(message)
        this.status = status
    }

}