//lib/DbError.js

class DbError {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }
}

module.exports = DbError;

