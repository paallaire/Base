/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable func-names */
const del = require('del');

module.exports = function (gulp, config) {
    return function (cb) {
        const stream = del(config.root.public, cb);
        return stream;
    };
};