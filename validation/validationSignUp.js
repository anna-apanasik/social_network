function validationSignUp(req) {

    req.check('login','Invalid login').notEmpty().isAlpha();
    req.check('email', 'Invalid email address').notEmpty().isEmail();
    req.check('password', 'Password is invalid').notEmpty().isLength({min: 4});

    return req.validationErrors();
}

module.exports = validationSignUp;