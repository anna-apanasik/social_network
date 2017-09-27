'use strict';

const models = require('../models');

module.exports = {
    signUp: function (req) {
        let data = {
            firstName: req.body.name,
            surname: req.body.surname,
            sex: req.body.sex,
            login: req.body.login,
            email: req.body.email,
            password: req.body.password
        };

        return models.users.findOne({where: {email: data.email}})
            .then(user => {
                if (user) {
                    return Promise.reject({param: 'email', msg: ' This address is busy'});
                }
                return models.users.findOne({where: {login: data.login}});
            })
            .then((user) => {
                if (user) {
                    return Promise.reject({param: 'login', msg: ' This login is busy'});
                }
                return models.users.create(data);
            })
            .then(newUser => {
                return Promise.resolve(newUser)
            })
            .catch(e => {
                return Promise.reject(e)
            });
    }
};
