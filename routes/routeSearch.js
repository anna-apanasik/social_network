const serviceSearch = require('../services/serviceSearch');
const servicePosts = require('../services/serviceNotes');

module.exports = function (app) {
    app.route('/api/search')
        .post(search);
    app.route('/api/search_login')
        .post(getLogin);
    app.route('/api/search_photos')
        .post(getPhotos);
    app.route('/api/home')
        .post(getPosts);
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
            data.posts = [];
            Promise.all(posts.map(item => {
                return serviceSearch.getStatusOfAccount(item.userId)
                    .then(user => {
                        if (!user.privateAccount) {
                            data.posts.push(item)
                        }
                    })
            }))
                .then(() => res.status(200).json(data))
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

function getPosts(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }

    let data = [];
    serviceSearch.getPosts()
        .then(posts => {
            if (posts.length > 10) {
                posts = posts.slice(posts.length - 10, posts.length)
            }
            Promise.all(posts.map(item => {
                return serviceSearch.getStatusOfAccount(item.userId)
                    .then(user => {
                        if (!user.privateAccount) {
                            data.push(item)
                        }
                    })
            }))
                .then(() => res.status(200).json(data))
        })
        .catch(e => res.status(400).json(e))
}