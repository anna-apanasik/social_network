'use strict';

module.exports = function (sequelize, DataTypes) {
    const users = sequelize.define('users', {
        userId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'USER_ID'},
        login: {type: DataTypes.STRING, unique: true, allowNull: false,field: 'LOGIN'},
        email: {type: DataTypes.STRING, unique: true,allowNull: false, field: 'EMAIL'},
        password: {type: DataTypes.STRING,allowNull: false, field: 'PASSWORD'},
        surname: {type: DataTypes.STRING, field: 'SURNAME'},
        name: {type: DataTypes.STRING, field: 'FIRST_NAME'},
        sex: {type: DataTypes.STRING, field: 'SEX'}
    }, {
        freezeTableName: true,
        classMethods: {
            associate: function (model) {
                    users.hasMany(model.notes, { foreignKey: 'fk_userId' });
            }
        }
    });

    return users;
};