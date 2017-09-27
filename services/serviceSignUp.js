'use strict';

const models = require('../models');

module.exports = {
    signUp: function (req,res) {
        let data = {
            firstName: req.body.name,
            surname: req.body.surname,
            sex: req.body.sex,
            login: req.body.login,
            email: req.body.email,
            password: req.body.password
        };
        console.log("find user");
        models.users.findOne({where: {email: data.email}})
            .then(user => {
                if (user) {

                    console.log(user.get({
                        plain: true
                    }));
                    return Promise.reject({code: 400,  param:'email',msg: ' This address is busy'});
                }
                return models.users.findOne({where: {login: data.login}});
            })
            .then((user) => {
                if (user) {
                    console.log(user.get({
                        plain: true
                    }));
                    return Promise.reject({code: 400, param:'login', msg: ' This login is busy'});
                }
                return models.users.create(data);
            })
            .then(newUser => {
                if (newUser) {
                    res.status(200).json()
                }
            })
            .catch(e => {
                res.status(400).json({errors: [e]})
            });

    }
};

// checkEmail: function (email,login) {
//     return models.users.findOne({where: {email: email}})
//         . (email) {
//                 return Promise.reject({code: 400}); //послать поле какое не нашла
//             }then((email) => {
//                 if
//             return models.users.findOne({where: {login: login}})
//         });
//         //.then(login)
//        // .catch(error)
//
// }
