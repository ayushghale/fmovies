import Blog from "../model/bog.model.js";
import Comment from "../model/comment.model.js";
import User from "../model/user.model.js";
import successHandler from "../uitls/successHandler.js";

// get all blogs

const BlogController = {
  // get- all blogs
  async getAllBlogs(req, res) {
    try {
      const blogs = await Blog.find();
      res.status(200).json({ blogs });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  // get - blog by id
  async getBlog(req, res) {
    const { id } = req.params;
    try {
      const blog = await Blog.findById(id);

      res.status(200).json({ blog });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  // post - create a blog
  async createBlog(req, res) {
    try {
      const { title, subtitle, description } = req.body;
      const author = req.user._id;
      const blog = await Blog.create({ title, subtitle, description, author });

      return successHandler(res, blog, `blog details`);
    } catch {
      return res.status(409).json({ message: error.message });
    }
  },

  // get -  all comment by a blog id
  async getAllBlogsByUser(req, res, next) {
    try {
      const { blogId } = req.params;

      const existingComment = await Comment.find({
        blog: blogId,
      }).populate({
        path: "blog",
        populate: {
          path: "author",
          model: User,
        },
      });
      // .populate({ path: "blog" });

      return successHandler(res, existingComment);
    } catch (e) {
      next(e);
    }
  },

  async addCategoryToBlog(req, res, next) {
    try {
      const { blogId } = req.params;
      const { categoryId } = req.body;

      const blog = await Blog.findById(blogId);
      blog.category.push(categoryId);
      await blog.save();

      return successHandler(res, blog, `category added to blog`);
    } catch (e) {
      next(e);
    }
  },
};

export default BlogController;
