const profileService = require('../services/serviceProfileInformation');
const validationProfileInformation = require('../validation/validationProfileInformation')

module.exports = function (app) {
    app.route('/api/profile')
        .post(getProfileInformation);
    app.route('/api/update')
        .post(update)
};

function getProfileInformation(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }
    profileService.getProfileInformation(req)
        .then((user) => {
            res.status(200).json({user});
        })
        .catch(e => {
            console.log("error in catch in promise" + e);
            res.status(400).json({errors: e});
        })
}

function update(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }

    let errors = validationProfileInformation(req);
    if (!errors) {
        profileService.update(req.body, req.body.login)
            .then(user => {
                return res.status(200).json(user)
            })
            .catch(e => {
                //TODO error route prof info
                console.log("errors " + e);
            })
    } else {
        res.status(400).json({errors: errors});
    }
}