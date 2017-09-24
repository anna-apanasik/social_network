
module.exports = function (app) {

    app.route('/api/login')
        .get(update);

};

function update(req,res) {
    if (!req.body) return res.sendStatus(400);
    res.sendFile('index.html', { root : 'src/public/' });
    // res.sendFile( 'A:/courses/wall/src/public/index.html');
    //res.render('index.html');
}