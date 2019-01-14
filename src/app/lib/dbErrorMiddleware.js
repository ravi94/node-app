/**
 * Created by ravi.b on 19-11-2018.
 */

// lib/dbErrorMiddleware.js
const DbError = require('./DbError');
module.exports = function(err, req, res, next) {
    console.log("db error middleware");

    if (err instanceof DbError) {
        return res.status(500)
            .json({
                error: 'DB Error ' + err.code
            })
    }

    console.log("forward error to next error middleware");
    next(err);
}