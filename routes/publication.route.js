const express = require("express");
const router = express.Router();
const publicationController = require('./../controller/publication.controller.js');

router.post('/', publicationController.createPublication);
router.get('/', publicationController.getAllPublications);  
router.get('/:id', publicationController.getPublicationById);
router.put('/:id', publicationController.updatePublication);
router.delete('/:id', publicationController.deletePublication);

module.exports = router;