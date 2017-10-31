'use strict';

const models = require('../models');

module.exports = {
    signUp: function (req) {
        let data = {
            name: req.body.name,
            surname: req.body.surname,
            sex: req.body.sex,
            login: req.body.login,
            email: req.body.email,
            password: req.body.password,
            public_id: req.body.public_id,
            privateAccount: req.body.privateAccount
        };

        return models.users.findOne({where: {email: data.email}})
            .then(user => {
                if (user) {
                    return Promise.reject({param: 'email', msg: 'This email is already in use\''});
                }
                return models.users.findOne({where: {login: data.login}});
            })
            .then((user) => {
                if (user) {
                    return Promise.reject({param: 'login', msg: 'This login is already in use\''});
                }
                return models.users.create(data);
            })
            .catch(e => Promise.reject(e))
    }
};
