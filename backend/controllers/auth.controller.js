import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });

    console.log(newUser);

    res.status(201).json({ message: "User successfully created." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create user." });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // check if user exists //
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // check if password is correct //
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // generate cookie token & send back to the user //
    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        //secure: true USE IN PRODUCTION / CAN NOT USE IN LOCALHOST
        maxAge: age,
      })
      .status(200)
      .json({ message: "Logic Successful." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to login." });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout successful." });
};
