import Category from "../model/category.model.js";

const CategoryController = {
  // get all categories
  async getAllCategories(req, res) {
    try {
      const categories = await Category.find();
      res.status(200).json({ categories });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  
  // get a category by id
  async categoryById(req, res) {
    try {
      const category = await Category.findById(req.params.categoryId);
      res.status(200).json({ category });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  // add a category
  async addCategory(req, res) {
    const { name } = req.body;
    try {
      const category = await Category.create({ name });
      res.status(201).json({ category });
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },
};

export default CategoryController;

