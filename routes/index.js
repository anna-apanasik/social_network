module.exports = function(app) {
    require('./routeSignUp')(app);
    require('./routeSignIn')(app);
    require('./routeProfileInformation')(app);
    require('./routePosts')(app);
    require('./routeSearch')(app);

};