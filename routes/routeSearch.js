const serviceSearch = require('../services/serviceSearch');
const servicePosts = require('../services/serviceNotes');

module.exports = function (app) {
    app.route('/api/search')
        .post(search);
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
            data.photos = [];
            data.usersForPosts = [];
            Promise.all(posts.map(item => {
                return serviceSearch.getStatusOfAccount(item.userId)
                    .then(user => {
                        if (!user.privateAccount) {
                            data.posts.push(item)
                        }
                    })
            }))
                .then(() => {
                    Promise.all(data.posts.map(item => {
                        return servicePosts.getPhotos(item.noteId)
                            .then(photos => {
                                data.photos = data.photos.concat(photos);
                            })
                    }))
                        .then(() => {
                            Promise.all(data.posts.map(item => {
                                return serviceSearch.getLogin(item.userId)
                                    .then(user => {
                                        data.usersForPosts = data.usersForPosts.concat(user);
                                    })
                            }))
                                .then(() => {
                                    data.usersForPosts = serviceSearch.unique(data.usersForPosts);
                                    res.status(200).json(data)
                                })
                        })
                })
        })
        .catch(e => res.status(400).json(e))
}

function getPosts(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }
    let data = {};
    data.posts = [];
    data.photos = [];
    data.usersForPosts = [];
    serviceSearch.getPosts()
        .then(posts => {
            Promise.all(posts.map(item => {
                return serviceSearch.getStatusOfAccount(item.userId)
                    .then(user => {
                        if (!user.privateAccount) {
                            data.posts.push(item)
                        }
                    })
            }))
                .then(() => {
                    if (data.posts.length > 5) {
                        data.posts = data.posts.slice(data.posts.length - 5, data.posts.length)
                    }
                    Promise.all(data.posts.map(item => {
                        return servicePosts.getPhotos(item.noteId)
                            .then(photos => {
                                data.photos = data.photos.concat(photos);
                            })
                    }))
                        .then(() => {
                            Promise.all(data.posts.map(item => {
                                return serviceSearch.getLogin(item.userId)
                                    .then(user => {
                                        data.usersForPosts = data.usersForPosts.concat(user);
                                    })
                            }))
                                .then(() => {
                                    data.usersForPosts = serviceSearch.unique(data.usersForPosts);
                                    data.posts.reverse();
                                    res.status(200).json(data)
                                })
                        })
                })
        })
        .catch(e => res.status(400).json(e))
}