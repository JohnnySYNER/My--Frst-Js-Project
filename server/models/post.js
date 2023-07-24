const mongoose = require('mongoose');

//for later use
const commentSchema = new mongoose.Schema({
    author: { type: mongoose.Types.ObjectId, ref: 'Login', required: true },
    content: { type: String, required: true },
    commentedAt: { type: Date, default: Date.now },
  });

const postSchema = new mongoose.Schema({
    postId:{ type:mongoose.Schema.Types.ObjectId ,required : true},
    author:{ type : mongoose.Types.ObjectId, ref :'Login', required : true},
    title:{type : String, required : true},
    content:{type : String, required : true},
    postedAt:{type : Date , default : Date.now}
});

const PostModel = mongoose.model('Post', postSchema);

module.exports = PostModel;