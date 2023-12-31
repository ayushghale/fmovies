import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    trim: true
  },
  email:{
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password:{
    type: String,
    required: true,
    trim: true
  },
  role:{
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
});

const User = mongoose.model("User", userSchema);
export default User;
