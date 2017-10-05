function validationProfileInformation(req){
    req.check('email', 'Invalid email address').isEmail();
    req.check('email', 'Enter email address').notEmpty();

    req.check('confirmPassword','Don\' match').equals(req.body.password);

    req.check('password', 'Minimum length 4 symbols').isLength({min: 4});
    req.check('confirmPassword', 'Minimum length 4 symbols').isLength({min: 4});

    req.check('password', 'Enter password').notEmpty();
    req.check('confirmPassword', 'Enter password').notEmpty();

return req.validationErrors()
}
module.exports = validationProfileInformation;