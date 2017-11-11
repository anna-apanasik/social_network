const servicePosts = require('../services/servicePosts');

module.exports = function (app) {
    app.route('/api/newpost')
        .post(createNewPost);
    app.route('/api/getposts')
        .post(getListOfPosts);
    app.route('/api/deletepost')
        .post(deletePost);
};

function createNewPost(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }

    servicePosts.addNewPost(req)
        .then(() => res.status(200).json())
        .catch(e => res.status(400).json())

}

function getListOfPosts(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }
    let data = {};
    data.photos = [];
    servicePosts.getPosts(req)
        .then(posts => {
            data.posts = posts.reverse();
            Promise.all(posts.map(item => {
                return servicePosts.getPhotos(item.noteId)
                    .then(photos => {
                        data.photos = data.photos.concat(photos);
                    })
            }))
                .then(() => res.status(200).json(data))
        })
        .catch(e => res.status(400).json(e));
}

function deletePost(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }

    servicePosts.deletePost(req)
        .then(() => res.status(200).json())
        .catch(e => res.status(400).json(e))
}