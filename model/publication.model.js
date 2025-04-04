const  { Schema } = require("mongoose");
const mongoose = require("mongoose");

const postSchema = new Schema({
   texte: {
        type: String,
        unique: true,
    },
});

const User = mongoose.model('Post', postSchema);

module.exports = User;