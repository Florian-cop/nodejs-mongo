const express = require("express");
const router = express.Router();
const commentController = require('../controller/comments.controller.js');

router.post('/add', commentController.addComments);
router.put('/:id', commentController.update);
router.delete('/:id', commentController.delete);
router.get('/:id',commentController.getById);

module.exports = router;
