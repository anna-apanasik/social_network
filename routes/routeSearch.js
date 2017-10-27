const serviceSearch = require('../services/serviceSearch');
const servicePosts = require('../services/serviceNotes');

module.exports = function (app) {
    app.route('/api/search')
        .post(search);
    app.route('/api/search_login')
        .post(getLogin);
    app.route('/api/search_photos')
        .post(getPhotos);
};

function search(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }
    let data = {};
    serviceSearch.searchUsers(req)
        .then(users => {
            data.users = users;
            return serviceSearch.searchPosts(req);
        })
        .then(posts => {
            data.posts = posts;
            res.status(200).json(data);
        })
        .catch(e => {
            res.status(400).json(e)
        })
}

function getLogin(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }

    serviceSearch.getLogin(req)
        .then(user => res.status(200).json(user.login))
        .catch(e => res.status(400).json(e))
}

function getPhotos(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }

    servicePosts.getPhotos(req.body.noteId)
        .then(photos => res.status(200).json(photos))
        .catch(e => res.status(400).json(e))
}