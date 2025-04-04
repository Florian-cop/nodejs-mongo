const  { Schema } = require("mongoose");
const mongoose = require("mongoose");

const commentsSchema = new Schema({
    text: { type: String, required: true }
});

const User = mongoose.model('Comments',commentsSchema);

module.exports = User;
