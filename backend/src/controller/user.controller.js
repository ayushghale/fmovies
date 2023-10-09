import User from "../model/user.model.js";
import { generateToken } from "../uitls/jwt.utils.js";
import successHandler from "../uitls/successHandler.js";
// import successHandler from "../utils/successHandler.js";

// get all users


const UserController = {
  // get all users
  async getAllUsers(req, res) {
    try {
      const { page, limit } = req.query;
      const startIndex = (page - 1) * limit;

      const responseUser = await User.find().limit(limit).skip(startIndex);

      return successHandler(res, responseUser, `user details`);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  // register new user
  async registerUser(req, res) {
    const user = req.body;
    const newUser = new User(user);
    try {
      await newUser.save();
      res.status(201).json({ newUser });
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },

  // login user
  async userLogin(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) return next(new Error(`User not found`));

      // If the email and password are correct, generate a JWT
      const vToken = generateToken(user._id, user.email, user.role);

      return successHandler(res, { vToken }, `user details`);
    } catch (e) {
      next(e);
    }
  },

  async patch(req, res) {
    const authorId = req.user._id;
    try {
      const responseComment = await User.fingByIdAndUpdate({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
      });
      return successHandler(res, responseComment, `upate details`);
    } catch (e) {
      next(e);
    }
  },

  // delete user
  async deleteUser(req, res) {
    const { id } = req.params;
    try {
      const deletedUser = await User.findByIdAndDelete(id);
      res.status(200).json({ deletedUser });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};

export default UserController;
