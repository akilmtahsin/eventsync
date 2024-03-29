const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
const jwt_key = process.env.JWT_SECRET;
const { validationResult } = require("express-validator");
const { check, body } = require("express-validator");

const Signup = async (req, res) => {
  const { role, username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exist" });
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    const user = User({
      email: email,
      password: hashedpassword,
      username: username,
      role: role,
    });

    await user.save();

    // const token = jwt.sign({ email: user.email, id: user._id, role: user.role}, jwt_key);

    res.status(201).json({ message: "signup success", user: user });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const token = jwt.sign(
      {
        role: existingUser.role,
        email: existingUser.email,
        id: existingUser._id,
      },
      jwt_key
    );
    res.status(200).json({ message: "login success", token: token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const viewProfile = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.userId });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateProfile = async (req, res) => {
  try {
    const { username, email, imageUrl } = req.body;
    const updatedUser = await User.findById(req.userId);

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    updatedUser.username = username;
    updatedUser.email = email;
    updatedUser.imageUrl = imageUrl;

   

    await updatedUser.save();

    res.status(200).json({ message: "Successfully updated" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { Signup, Login, viewProfile, updateProfile };
