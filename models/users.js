'use strict';

module.exports = function (sequelize, DataTypes) {
    const users = sequelize.define('users', {
        userId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'USER_ID'},
        login: {type: DataTypes.STRING, unique: true, allowNull: false, field: 'LOGIN'},
        email: {type: DataTypes.STRING, unique: true, allowNull: false, field: 'EMAIL'},
        password: {type: DataTypes.STRING, allowNull: false, field: 'PASSWORD'},
        surname: {type: DataTypes.STRING, field: 'SURNAME'},
        name: {type: DataTypes.STRING, field: 'FIRST_NAME'},
        sex: {type: DataTypes.STRING, field: 'SEX'},
        public_id: {type: DataTypes.STRING, field: 'PUBLIC_ID'},
        privateAccount: {type: DataTypes.BOOLEAN, field: 'PRIVATE ACCOUNT'}
    }, {
        freezeTableName: true,
        classMethods: {
            associate: function (model) {
                users.hasMany(model.notes, {foreignKey: 'fk_user_id'});
            }
        }
    });

    return users;
};