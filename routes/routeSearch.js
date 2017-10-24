const serviceSearch = require('../services/serviceSearch');

module.exports = function (app) {
    app.route('/api/search')
        .post(search);

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
