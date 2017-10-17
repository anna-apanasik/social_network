const models = require('../models');

module.exports = {
    addNewPost: function (req) {
        if (req.body.text) {
            //TODO field text is empty
        }
        return models.notes.create({
            userId: req.body.userId,
            title: req.body.title,
            text: req.body.text
        })
            .catch(e => {
                //TODO delete console
                //TODO error in addNewNote
                console.log("error" + e);
                return Promise.reject(e)
            })
    },

    getPosts: function (req) {
        return models.notes.findAll({where: {userId: req.body.userId}})
            .then(posts => {
                return Promise.resolve(posts);
            })
            .catch(e => Promise.reject(e));
    }

};