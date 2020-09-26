const Comments = require('../models/Comments');

module.exports = {
    getAllComments : async (req, res) => {
        const comments = await Comments.find().sort({'createdAt': -1})
        if(comments){
            res.send({comments})
        } else {
            res.status(400).json({
                message: "failed"
            })
        }
    },
    addComments : async (req, res) => {
        const newComment = await Comments.create(req.body)
        if(newComment){
            res.send({newComment})
        } else {
            res.send({message:'error'})
        }
    }
}