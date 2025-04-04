const Publication = require('../model/publication.model.js');

exports.createPublication = async (req, res) => {
    const newPublication = await Publication.create({ _text: req.body });
    if (!newPublication) {
        return res.status(400).json({ error: "Error creating publication" });
    }
    if(req.file){
        newPublication.picture = './picture/' + req.file.filename;
    }
    try {
        await newPublication.save();
    res.status(201).json(newPublication);
    } catch (error) {
        return res.status(500).json({ error: "Error saving publication" });
    }
}

exports.getAllPublications = async (req, res) => {
    const publications = await Publication.find();
    if(!publications) {
        return res.status(404).json({ error: "Publications not found" });
    }
    return res.status(200).json(publications);
}

exports.getPublicationById = async (req, res) => {
    const publication = await Publication.findById( {_id: req.params.id} );
    if(!publication) {
        return res.status(404).json({ error: "Publication not found" });
    }
    return res.status(200).json(publication);
}

exports.updatePublication = async (req, res) => { 
    const publication = await Publication.findById( {_id: req.params.id} );
    if(!publication) {
        return res.status(404).json({ error: "Publication not found" });
    }
    if(!req.body.texte) {
        return res.status(400).json({ error: "Text is required" });
    }
    if(req.body.texte === "") {
        return res.status(400).json({ error: "Text is required" });
    }
    return res.status(200).json({ message: "Publication updated successfully" });
}

exports.deletePublication = async (req, res) => {
    const publication = await Publication.findByIdAndDelete({ _id: req.params.id });
    if(!publication) {
        return res.status(404).json({ error: "Publication not found" });
    }
    return res.status(200).json({ message: "Publication deleted successfully" });
}