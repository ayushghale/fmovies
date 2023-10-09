import { Router } from "express";
import CommentController from "../controller/comment.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import ReplyController from "../controller/reply.controller.js";

const commentRouter = Router(); //api/comment/

// comment get all comments
commentRouter.get("/", CommentController.getAllComments);



// reply  get - all reply 
commentRouter.get("/replies", ReplyController.getAllReplies);

// reply post - add new reply
commentRouter.post("/:commentId/reply", authMiddleware, ReplyController.addReply);



// comment get- comment by id
commentRouter.get("/:commentId", CommentController.commentById);

// comment Post - add new comment 
commentRouter.post("/:blogId", authMiddleware, CommentController.addComment);




export default commentRouter;