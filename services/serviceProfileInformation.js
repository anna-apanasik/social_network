'use strict';

const models = require('../models');

module.exports = {
    logIn: function (req) {
        let data = {
            login: req.body.login,
            password: req.body.password
        };

        return models.users.findOne({where: {login: data.login, password: data.password}})
            .then(user => {
                if (user) {
                    return Promise.resolve({msg: ' all i ok'});
                }
                return Promise.reject([{param: 'login', msg: "Wrong login or password"}, {
                    param: 'password',
                    msg: "Wrong login or password"
                }])
            })
            .catch(e => {
                return Promise.reject(e)
            });
    }
};
