import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// export function generateToken(user) {
//   return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "7d" });
// }

// export function decodeToken(token) {
//   return jwt.verify(token, process.env.JWT_SECRET);
// }

// export function verifyToken(token) {
//   return jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
//     if (err) {
//       return false;
//     }
//     return decode;
//   });
// }

dotenv.config(); 

export function generateToken(userId, email, role) {
  const token = jwt.sign({ email, userId, role }, `${process.env.key}`);
  return token
}

export function decodeToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

export function verifyToken(token) {
  const verification = jwt.verify(token, `${process.env.key}`);
  return verification;
}
