import mongoose from "mongoose";

const blogCategoryRelSchema = new mongoose.Schema({
    blog:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog", 
        required: true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category", 
        required: true
    }
},
{
    timestamps: true,
});

export default mongoose.model("BlogCategoryRel", blogCategoryRelSchema);
