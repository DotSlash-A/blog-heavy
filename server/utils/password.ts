import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const hashPassword = async (password: string) => {
  try {
    const salt: number = 10;
    const hash = await bcrypt.hash(password, salt);

    return hash.toString();
  } catch (err) {
    throw err;
  }
};

export const comparePasswords = async (password: string, hash: string) => {
  try {
    const match = await bcrypt.compare(password, hash);

    return match;
  } catch (error) {
    console.error(error);
  }
};

export const generatetoken = (id: number, email: string, username: string) => {
  const token = jwt.sign(
    {
      id,
      username,
      email,
    },
    process.env.JWT_KEY as string,
    { expiresIn: "36h" }
  );
  return token;
};
