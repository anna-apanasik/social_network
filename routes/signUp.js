const validationSignUp = require('../validation/validationSignUp');

module.exports = function (app) {
    app.route('/api/registration')
        .get(update);
    app.route('/api/registration')
        .post(registration);
};

function update(res) {
    res.sendStatus(200);
}

function registration(req, res) {

    if (!req.body) return res.sendStatus(400);

    let errors = validationSignUp(req);
    console.log(errors);
    if (!errors) {
        res.status(200).json();
    } else {
        res.status(400).json({errors: errors});
    }

}