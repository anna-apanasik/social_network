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
            .catch(() => Promise.reject())
    },

    deletePost: function (req) {
        return models.photos.destroy({where: {noteId: req.body.noteId}})
            .then(() => models.notes.destroy({where: {noteId: req.body.noteId}}))
            .catch(() => Promise.reject());
    },

    getPosts: function (req) {
        return models.notes.findAll({where: {userId: req.body.userId}})
            .then(posts => Promise.resolve(posts))
            .catch(() => Promise.reject());
    },

    getPhotos: function (postId) {
        return models.photos.findAll({where: {noteId: postId}})
            .then(photos => Promise.resolve(photos))
            .catch(() => Promise.reject())
    },

    editPost: function (req) {
        return models.notes.update({
            title: req.body.title,
            text: req.body.text
        }, {
            where: {noteId: req.body.noteId}
        })
            .then(() => models.photos.destroy({where: {noteId: req.body.noteId}}))
            .then(() => {
                if (req.body.photos.length !== 0) {
                    req.body.photos.forEach(item => {
                        return models.photos.create({
                            photo: item,
                            noteId: req.body.noteId
                        })
                    });
                }
            })
            .catch(() => Promise.reject())
    }
};