const profileService = require('../services/serviceProfileInformation');

module.exports = function (app) {
    app.route('/api/profile')
        .post(getProfileInformation);
};

function getProfileInformation(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }
    try {
        profileService.getProfileInformation(req)
            .then((user) => {
                console.log("user info in route " + user);
                res.status(200).json({user})
            })
            .catch(e => {
                console.log("error in catch in promise"+e);
                res.status(400).json({errors: e})
            })
    }catch (errors) {
        console.log("error in catch"+errors);
        res.status(400).json({errors: errors});
    }
}