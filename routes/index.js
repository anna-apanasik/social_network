module.exports = function(app) {
    require('./routeSignUp')(app);
    require('./routeSignIn')(app);
    require('./routeOtherPages')(app);
};