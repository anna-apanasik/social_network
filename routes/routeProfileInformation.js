const profileService = require('../services/serviceProfileInformation');
const validationProfileInformation =require('../validation/validationProfileInformation')
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
    try {
        profileService.getProfileInformation(req)
            .then((user) => {
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

function update(req,res){
    if (!req.body) {
        return res.sendStatus(400);
    }

    let errors = validationProfileInformation(req);
    if (!errors) {
        // signUpService.signUp(req, res)
        //     .then(() => {
        //         return res.status(200).json()
        //     })
        //     .catch(e => {
        //         res.status(400).json({errors: [e]});
        //     })
    } else {
        res.status(400).json({errors: errors});
    }
}