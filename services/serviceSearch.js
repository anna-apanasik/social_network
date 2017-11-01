const models = require('../models');

module.exports = {
    searchUsers: function (req) {
        let users = [];
        return models.users.findAll({where: {login: req.body.search}})
            .then(foundUsers => {
                users = users.concat(foundUsers);
                return models.users.findAll({where: {name: req.body.search}})
            })
            .then(foundUsers => {
                users = users.concat(foundUsers);
                return models.users.findAll({where: {surname: req.body.search}});
            })
            .then(foundUsers => {
                users = users.concat(foundUsers);
                users = this.unique(users);
                return Promise.resolve(users);
            })
            .catch(e => Promise.reject(e));
    },

    searchPosts: function (req) {
        return models.notes.findAll({where: {title: req.body.search}})
            .then(posts => Promise.resolve(posts))
            .catch(e => Promise.reject(e));
    },

    getLogin: function (req) {
        return models.users.findOne({where: {userId: req.body.userId}})
            .then(user => Promise.resolve(user))
            .catch(e => Promise.reject(e));
    },

    getPosts: function () {
        return models.notes.findAll()
            .then(posts => Promise.resolve(posts))
            .catch(e => Promise.reject(e));
    },

    getStatusOfAccount: function (userId) {
        return models.users.findOne({where: {userId: userId}})
            .then(user => Promise.resolve(user))
            .catch(e => Promise.reject(e))
    },

    unique: function (arr) {
        let out = [];
        nextInput:
            for (let i = 0; i < arr.length; i++) {
                let elem = arr[i];
                for (let j = 0; j < out.length; j++) {
                    let current = out[j];
                    if (current.userId === elem.userId) continue nextInput;
                }
                out.push(elem);
            }
        return out;
    }
};
