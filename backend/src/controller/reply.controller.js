import Reply from "../model/reply.model.js";


const RepllyController = {
    // get all replies
    async getAllReplies(req, res) {

        try {
        const replies = await Reply.find();
        res.status(200).json({ replies });
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
    },
    
    // get a reply by id
    async replyById(req, res) {
        const { replyId } = req.params;
        try {
        const reply = await Reply.findById(replyId);
        res.status(200).json({ reply });
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
    },

    // add a reply
    async addReply(req, res) {

        const { commentId } = req.params;
        const _id = req.user._id;
        const { body } = req.body;

        console.log(commentId, _id, body);
        try {
        const reply = await Reply.create({ body, author:_id, comment:commentId });
        res.status(201).json({ reply });
        } catch (error) {
        res.status(409).json({ message: error.message });
        }
    }
};

export default RepllyController;