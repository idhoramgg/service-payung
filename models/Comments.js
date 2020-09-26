const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    avatar: {
        type: String,
        default:"https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/robot-01-icon.png"
    },
    email: {
        type: String,
    },
    comments: {
        type: String
    }
}, {timestamps: true})

const Comments = mongoose.model('comments', CommentsSchema);

module.exports = Comments;