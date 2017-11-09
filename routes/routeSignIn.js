const validationSignIn = require('../validation/validationSignIn');
const signInService = require('../services/serviceSignIn');

module.exports = function (app) {
    app.route('/api/login')
        .post(signIn);
};

function signIn(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }

    let errors = validationSignIn(req);

    if (!errors) {
        signInService.signIn(req)
            .then(() => {
                return res.status(200).json()
            })
            .catch(e => {
                res.status(400).json({errors: e});
            })
    } else {
        res.status(400).json({errors: errors});
    }
}
