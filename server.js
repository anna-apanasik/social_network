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


const models = require('./models');
models.sequelize.sync().then(function() {

    console.log('Nice! Database looks fine')

}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")

});

app.listen(port, () => {
    console.log('Server listening on: ' + port);
});












// var Sequelize = require('sequelize');
// var sequelize = new Sequelize('database', 'root', 'root', {
//     host: '127.0.0.1',
//     dialect: 'mysql',
//
// });
// var User = sequelize.define('user', {
//     firstName: {
//         type: Sequelize.STRING,
//         field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
//     },
//
//     lastName: {
//         type: Sequelize.STRING
//     }
// }, {
//     freezeTableName: true // Model tableName will be the same as the model name
// });
//
// User.sync({force: true}).then(function () {
//     // Table created
//     return User.create({
//         firstName: 'John',
//         lastName: 'Hancock'
//     });
// });


// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//     host     : '127.0.0.1',
//     user     : 'root',
//     password : 'root',
//     database : 'mysql'
// });
//
// connection.connect(function(err) {
//     if (err) {
//         console.error('Error connecting to MySQL: ' + err.stack);
//         return;
//     }
//     console.log('connected as id ' + connection.threadId);
// });


