'use strict';

module.exports = function (sequelize, DataTypes) {
    const notes = sequelize.define('notes', {
        noteId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'NOTE_ID'},
        userId: {type: DataTypes.INTEGER, field: 'USER_ID'},
        title: {type: DataTypes.STRING, field: 'TITLE'},
        text: {type: DataTypes.STRING, allowNull: false, field: 'TEXT'}
    }, {
        freezeTableName: true,
        classMethods: {
            associate: function (model) {
                notes.belongsTo(model.users, {foreignKey: 'fk_user_id'});
                notes.hasMany(model.photos, {foreignKey: 'fk_photos_id'})
            }
        }
    });

    return notes;
};