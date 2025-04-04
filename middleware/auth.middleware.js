const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.headers?.authorization;
    console.log("🚀 ~ req:", req.headers.authorization)

    if( !token ) {
        res.status(401).json({
            'message': 'You must be logged in to do this action.'
        });
        return;
    }

    try {
        req.token = jwt.verify(token, process.env.JWT_KEY);
    } catch (e) {
        res.status(401).json({
            'message': 'Your credentials are not valid.'
        });
    }

    next();
}
