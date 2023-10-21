import Blog from "../model/bog.model.js";
import successHandler from "../uitls/successHandler.js";

// get all blogs

const TestController = {
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
      const author = "6512ecdedee6fb59251b3e85";
      const blog = await Blog.create({ title, subtitle, description, author });

      return successHandler(res, blog, `blog details`);
    } catch {
      return res.status(409);
    }
  },

  // update a blog
  async updateBlog(req, res) {
    try {
      const { id } = req.params;
      const { title, subtitle, description } = req.body;
      const author = "6512ecdedee6fb59251b3e85";
      const blog = await Blog.findByIdAndUpdate(
        id,
        { title, subtitle, description, author },
        { new: true }
      );

      return successHandler(res, blog, `blog details`);
    } catch {
      return res.status(409).json({ message: error.message });
    }
  },

  // delete a blog
  async deleteBlog(req, res) {
    try {
      const { id } = req.params;
      const blog = await Blog.findByIdAndDelete(id);

      return successHandler(res, blog, `blog details`);
    } catch {
      return res.status(409).json({ message: error.message });
    }
  },
};

export default TestController;
