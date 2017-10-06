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
    },
    update: function(updates, login){
        return models.users.update({
            login:updates.login,
            email:updates.email,
            password:updates.password,
            surname:updates.surname,
            name:updates.name,
            sex:updates.sex
        },{
            where:{login:login}
        })
            .then(()=> models.users.findOne({ where:{login:login}}))
            .catch(e=>Promise.reject(e))
    }
};
