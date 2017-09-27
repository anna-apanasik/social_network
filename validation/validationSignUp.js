function validationSignUp(req) {
    req.check('login','Use only English letters').isAlpha();
    req.check('login','Enter login').notEmpty();
    req.check('email', 'Invalid email address').isEmail();
    req.check('email', 'Enter email address').notEmpty();
    req.check('password', 'Minimum length 4 symbols').isLength({min: 4});
    req.check('password', 'Enter password').notEmpty();

    return req.validationErrors();
}

module.exports = validationSignUp;