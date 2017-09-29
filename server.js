'use strict';

const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const path = require('path');
const models = require('./models');

const port = process.env.port || 3000;

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(expressValidator());

app.set('views', path.join(__dirname, '/src/public'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'src/public/')));

require('./routes')(app);

models.sequelize.sync().then(function () {
    console.log('Nice! Database looks fine')
}).catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!")
});

app.listen(port, () => {
    console.log('Server listening on: ' + port);
});


