import Comment from "../model/comment.model.js";

import successHandler from "../uitls/successHandler.js";


const CommentController = { 
  // get all comments
  async getAllComments(req, res) {
    try {
      const comments = await Comment.find();
      res.status(200).json({ comments });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  // get a comment by id
  async commentById(req, res) {
    const { commentId } = req.params;
    try {
      const comment = await Comment.findById(commentId);
      res.status(200).json({ comment });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },


  // add a comment to a blog id
  async addComment(req, res) {
    const {blogId}  = req.params;
    const author = req.user._id;

    console.log(author, blogId);
    const { title, description } = req.body;

    console.log(title, description, author, blogId);
    try {
      const comment = await Comment.create({ title, description, author, blog:blogId });
      res.status(201).json({ comment });
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },

  // get comment and reply
  async getCmmAndReply(req, res) {
    try {
      const { commentId } = req.params;

      console.log(commentId);
      const existingReply = await Comment.find({ comment: commentId,
       }).populate({
        path: "reply",
       });
      return successHandler(res, existingReply, `reply details`);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};

export default CommentController;


