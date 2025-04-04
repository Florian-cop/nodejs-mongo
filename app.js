const express = require("express");
const app = express();
const {connect} = require('./database/connection.js');

const authMiddleware = require('./middleware/auth.middleware');

app.use(express.json());

const database = async () => {
    await connect();
}

database();

const publicationRoute = require("./routes/publication.route.js");
const commentsRoute = require("./routes/comments.route.js");
const authRoute = require("./routes/auth.route");


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', "GET, POST");

    next();
});


app.use('/auth', authRoute);
app.use('/publications',authMiddleware, publicationRoute);
app.use('/comments', commentsRoute);

module.exports = app;
