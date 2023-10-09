import blogCategoryRelModel from "../model/blogCategoryRel.model.js";

const BlogCategoryRelController = {
    // get- all blogs category rel
    async getAllBlogCategoryRel(req, res, next) {
        try {
            const blogCategoryRel = await blogCategoryRelModel.find();
            return res.status(200).json({ blogCategoryRel });
        } catch (error) {
            next(error);
        }
    },

    // post - create a blog category rel
    async createBlogCategoryRel(req, res, next) {
        try {
            const { blog, category } = req.body;
            const blogCategoryRel = await blogCategoryRelModel.create({ blog, category });
            return res.status(200).json({ blogCategoryRel });
        } catch (error) {
            next(error);
        }
    },

};
export default BlogCategoryRelController;