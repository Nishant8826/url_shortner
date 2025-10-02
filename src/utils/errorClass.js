class ErrorClass extends Error {
    constructor(message, code) {
        super(message);
        this.code = code || 500;
    }
}

module.exports = ErrorClass;