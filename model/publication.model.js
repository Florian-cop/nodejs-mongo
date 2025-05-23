const  { Schema } = require("mongoose");
const mongoose = require("mongoose");

const postSchema = new Schema({
   text: {
        type: String,
        required: true,
    },
    userId: {
          type: String,
          required: true,
     },
    picture: String
});

const User = mongoose.model('Post', postSchema);

module.exports = User;