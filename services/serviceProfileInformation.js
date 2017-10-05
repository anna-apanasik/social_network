'use strict';

const models = require('../models');

module.exports = {
    getProfileInformation: function (req) {
        let data = {
            login: req.body.login,
        };

        return models.users.findOne({where: {login: data.login}})
            .then(user => {
                if (user) {
                    return Promise.resolve(user);
                }
                return Promise.reject({param: 'login', msg: "Didn't find this profile"})
            })
            .catch(e => {
                return Promise.reject(e)
            });
    }
};
