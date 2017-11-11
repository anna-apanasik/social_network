'use strict';

const jsonWebToken = require('jsonwebtoken');

const expressConfig = require('../config/express.json');

module.exports = {
    sign: function (user) {
        return jsonWebToken.sign(user, expressConfig.auth.secret, {expiresIn: expressConfig.auth.expiresIn});
    },

    verifyToken: function (token) {
        return new Promise(() => {
            jsonWebToken.verify(token, expressConfig.auth.secret, (err, decoded) => {
                if (err) {
                    return Promise.reject(err);
                }
                return Promise.resolve({success: true});
            })
        });
    }
};