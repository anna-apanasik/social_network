'use strict';

module.exports = function (sequelize, DataTypes) {
    const photos = sequelize.define('photos', {
        photosId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'PHOTOS_ID'},
        noteId: {type: DataTypes.INTEGER, allowNull: false, field: 'NOTE_ID'},
        photo: {type: DataTypes.STRING, field: 'PHOTO'}
    }, {
        freezeTableName: true,
        classMethods: {
            associate: function (model) {
                photos.belongsTo(model.notes, {foreignKey: 'fk_photos_id'});
            }
        }
    });

    return photos;
};