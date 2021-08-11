export class ApplicationException extends Error {
    constructor(message = 'An unexpected error occurred') {
        super(message);
        Object.setPrototypeOf(this, ApplicationException.prototype);
    }
}