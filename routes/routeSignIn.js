const validationSignIn = require('../validation/validationLogIn');
const logInService = require('../services/serviceLogIn');
module.exports = function (app) {
    app.route('/api/login')
        .post(logIn);
};
function logIn(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }

    let errors = validationSignIn(req);

    if (!errors) {
        logInService.logIn(req)
            .then((user) => {
                console.log('success ' +user);
                return res.status(200).json()
            })
            .catch(e=>{
                console.log('errors ' +e);
                res.status(400).json({errors:e});
            })
    } else {
        console.log("error in validation " +errors);
        res.status(400).json({errors: errors});
    }
}
