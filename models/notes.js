'use strict';

module.exports = function (sequelize, DataTypes) {
    const notes = sequelize.define('notes', {
        noteId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'NOTE_ID'},
        title: {type: DataTypes.STRING, field: 'TITLE'},
        text: {type: DataTypes.STRING, allowNull: false, field: 'TEXT'},
    }, {
        freezeTableName: true,
        classMethods: {
            associate: function (model) {
                    notes.belongsTo(model.users, { foreignKey: 'fk_userId' });
            }
        }
    });

    return notes;
};