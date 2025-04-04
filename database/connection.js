const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mongodb-g5');
        console.log("connected to database");
    } catch (error) {
        console.error("Error database connection" + error);
    }
}

module.exports = { connect };
