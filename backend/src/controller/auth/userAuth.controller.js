import User from "../../model/user.model";
import { generateToken } from "../../utils/jwt.utils";
import successHandler from "../../utils/successHandler";


const UserAuth = {
    async login(req, res) {
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
    async register(req, res) {
        const user = req.body;
        const newUser = new User(user);
        try {
            await newUser.save();
            res.status(201).json({ newUser });
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    },
};

export default UserAuth;