const Comment = require("./../model/comments.model.js");

exports.addComments = async (req, res) => {
    if (!req.body.text || req.body.text === "") {
        return res.status(400).json({ message: "Veuillez saisir votre commentaires" })
    };
    let comments = await Comment.create({
        text: req.body.text,
    });
    res.status(201).json(comments);
}

exports.getById = async (req, res) => {
    let comment = await Comment.findOne({ _id: req.params.id });
    if (!comment) {
        return res.status(404).json({ error: "commentaire non trouvé" });
    }
    res.status(200).json(comment);
}

exports.update = async (req, res) => {
    let comments = await Comment.findOne({ _id: req._id });

    if (!comments) {
        return res.status(404).json({ error: "Commentaire non trouvé" });
    }
    if (req.body.text) {
        comments.text = req.body.text;
    }

    try {
        await comments.save();
        return res.status(201).json(comments);
    }catch(e){
        return res.status(500).json({error: "Problème lors de la modificaition du commentaire"});
    }
}

exports.delete = async (req, res) => {
    let result = await Comment.deleteOne({ _id: req.params.id });
    if (result !== 1) {
        return res.status(404).json({ error: "commentaire non trouvé" });
    }
    return res.status(200).json({ message: "commentaire supprimé" });
}
