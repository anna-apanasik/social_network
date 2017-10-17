const servicePosts = require('../services/serviceNotes');

module.exports = function (app) {
    app.route('/api/newpost')
        .post(createNewPost);
    app.route('/api/getposts')
        .post(getListOfPosts);
};

function createNewPost(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }

    servicePosts.addNewPost(req)
        .then(() => {
            res.status(200).json();
        })
        .catch(e => {
            //TODO delete console.log
            console.log('error in route notes: ' + e);
            res.status(400).json()
        })

}

function getListOfPosts(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }
    servicePosts.getPosts(req)
        .then(posts => res.status(200).json(posts))
        .catch(e => res.status(400).json(e))
}