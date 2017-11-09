const models = require('../models');

module.exports = {
    addNewPost: function (req) {
        return models.notes.create({
            userId: req.body.userId,
            title: req.body.title,
            text: req.body.text
        })
            .then(post => {
                req.body.photos.forEach(item => {
                    return models.photos.create({
                        photo: item,
                        noteId: post.noteId
                    })
                });
            })
            .catch(e => Promise.reject(e))
    },

    deletePost: function (req) {
        return models.photos.destroy({where: {noteId: req.body.noteId}})
            .then(() => models.notes.destroy({where: {noteId: req.body.noteId}}))
            .catch(e => {
//TODO delete
                console.log("errorr in delete " + e)
            })
    },

    getPosts: function (req) {
        return models.notes.findAll({where: {userId: req.body.userId}})
            .then(posts => Promise.resolve(posts))
            .catch(e => Promise.reject(e));
    },

    getPhotos: function (postId) {
        return models.photos.findAll({where: {noteId: postId}})
            .then(photos => Promise.resolve(photos))
            .catch(e => Promise.reject(e))
    }
};