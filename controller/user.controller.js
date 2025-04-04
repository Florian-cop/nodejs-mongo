const jwt = require("jsonwebtoken");
const User = require("../model/user.model.js");
const bcrypt = require("bcrypt");
require("dotenv").config();

exports.signin = async (req, res) => {
    if (!req?.body?.email || req?.body?.email === "" || !req?.body?.password || req?.body?.password === "" || req?.body?.pseudo === "" || req.body?.pseudo?.length < 3) {
        return res.status(400).json({ message: "Veuillez saisir un email, un pseudo, et un mot de passe" })
    };
    let user = await User.create({
        email: req.body.email,
        pseudo: req.body.pseudo,
        password: bcrypt.hashSync(req.body.password, 10),
    });
    return res.status(201).json(user);
}

exports.login = async (req, res) => {
    if (!req.body.email || req.body.email === "" || !req.body.password || req.body.password === "") {
        return res.status(400).json({ message: "login ou mot de passe incorrect" })
    };
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(401).json({ error: "login ou mot de passe incorrect" });
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(401).json({ error: "login ou mot de passe incorrect" });
    }
    return res.status(200).json({
        _id: user._id,
        email: user.email,
        pseudo: user.pseudo,
        token: jwt.sign({
            _id: user._id,
            email: user.email,
            pseudo: user.pseudo
        }, process.env.JWT_KEY, { expiresIn: '24H' })
    });
}
