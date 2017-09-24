const validationSignUp = require('../validation/validationSignUp');
//const path = require('path');

module.exports = function (app) {
    app.route('/api/build/bundle.js')
        .get(getBundle);

    app.route('/api/registration')
        .get(update);

    app.route('/api/registration')
        .post(registration);
};

function getBundle(req,res){
    if (!req.body) return res.sendStatus(400);
    res.sendFile('bundle.js', { root : 'src/public/build' });
}

function update(req,res) {
    if (!req.body) return res.sendStatus(400);
    res.sendFile('index.html', { root : 'src/public/' });
    // res.sendFile( 'A:/courses/wall/src/public/index.html');
    //res.render('index.html');
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