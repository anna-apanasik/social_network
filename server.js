'use strict';

const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.port || 3000;

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(expressValidator());

app.set('views', path.join(__dirname, '/src/public'));
//app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'src/public/')));

require('./routes')(app);

app.listen(port, () => {
    console.log('Server listening on: ' + port);
});
// var models = require("./models");
//
// //Sync Database
// models.sequelize.sync().then(function() {
//
//     console.log('Nice! Database looks fine')
//
// }).catch(function(err) {
//
//     console.log(err, "Something went wrong with the Database Update!")
//
// });



