'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Users', {
    username: {
      type: DataTypes.STRING,
      validate: {notEmpty: {msg: "-> Missing username"}}
    },
    password: {
      type: DataTypes.STRING,
      validate: {notEmpty: {msg: "-> Missing password"}}
    },

    displayName: {
      type: DataTypes.STRING,
      validate: {notEmpty: {msg: "-> Missing displayName"}}
    }
  });

};


var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
username: {type: String, required: true},
password: {type: String, required: true, select: false},
displayName: {type: String, required: true},
favoriteSongs: [String],
createdAt: {type: Date, required: true, 'default': Date.now}
});

module.exports = mongoose.model('user', userSchema);
