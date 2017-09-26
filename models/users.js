'use strict';

module.exports = function (sequelize, DataTypes) {
    const users = sequelize.define('users', {
        signUpId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'SIGN_UP_ID'},
        login: {type: DataTypes.STRING, unique: true, field: 'LOGIN'},
        email: {type: DataTypes.STRING, unique: true, field: 'EMAIL'},
        password: {type: DataTypes.STRING, field: 'PASSWORD'},
        surname: {type: DataTypes.STRING, field: 'SURNAME'},
        firstName: {type: DataTypes.STRING, field: 'FIRST_NAME'},
        sex: {type: DataTypes.STRING, field: 'SEX'}
    }, {
        freezeTableName: true
        // classMethods: {
        //     associate: function (model) {
        //             signUp.hasMany(model.signIn, { foreignKey: 'fk_course_id' });
        //     }
        // }
    });

    return users;
};