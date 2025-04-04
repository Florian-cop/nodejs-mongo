const  { Schema } = require("mongoose");
const mongoose = require("mongoose");

const user = new Schema({
    email: {
        type: String,
        unique: true,
        validate: function(value){
            return /.+@.+/.test(value);
        }
    },
    pseudo: {
        type: String,
        unique: true,
        validate: function(value){
            return value.length >= 3;
        }
    },
    password: {
        type: String,
        validate: function(value){
            return value.length >= 6;
        }
    },
    token: {
        type: String,
    }
});

const User = mongoose.model('User',user);

module.exports = User;
