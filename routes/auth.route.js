const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');
const userController = require("../controller/user.controller")

router.post('/signin', userController.signin);
router.post('/login', userController.login);