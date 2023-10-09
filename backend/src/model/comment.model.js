import mongoose, { Schema } from "mongoose";

const comment = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
        required: true
    },
    blog:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog", 
        required: true
    },
    reply : {
        type : [Schema.Types.ObjectId],
        ref : "Reply"
    }
});

const Comment = mongoose.model("Comment", comment);
export default Comment;