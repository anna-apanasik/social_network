'use strict';
module.exports = {
    getObject: function (array, searchValue) {
        let i = array.length;
        while (i--) {
            if (array[i].param == searchValue) {
                return array[i];
            }
        }
    },

    isEmptyObject: function (emptyObject) {
        return JSON.stringify(emptyObject) === '{}';
    }

};