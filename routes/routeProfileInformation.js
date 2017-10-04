module.exports = function (app) {
    app.route('/api/profile')
        .post(getProfileInformation);
};

function getProfileInformation(req,res){
    if (!req.body) {
        return res.sendStatus(400);
    }
}