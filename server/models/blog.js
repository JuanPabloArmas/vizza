const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    creator_id: String, 
    creator_name: String, 
    parent: String, 
    content: String
});

const StorySchema = new mongoose.Schema({
    creator_id: String, 
    creator_name: String, 
    content: String
});

const UserSchema = new mongoose.Schema({
    name: String,
    googleid: String
})