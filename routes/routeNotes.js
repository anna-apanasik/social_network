const serviceNotes = require('../services/serviceNotes');

module.exports = function (app) {
    app.route('/api/new_note')
        .post(createNewNote);
};

function createNewNote(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }

    serviceNotes.addNewNote(req)
        .then(() => {
            res.status(200).json();
        })
        .catch(e => {
            console.log('error in route: ' + e);
            res.status(400).json()
        })

}