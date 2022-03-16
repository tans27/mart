const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// @route POST api/auth/register
// @desc Register user
// @access public

router.post("/register", async (req, res) => {
  const {
    username,
    password,
    firstname,
    lastname,
    gender,
    phone,
    email,
    address,
    usertype,
  } = req.body;

  // Simple validation
  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid username or password" });
  }
  try {
    // Check for existing user
    const user = await User.findOne({ username: username });

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const phoneNumber = await User.findOne({ phone: phone });

    if (phoneNumber) {
      return res
        .status(400)
        .json({ success: false, message: "Phone already exists" });
    }

    // All good
    const hashedPassword = await argon2.hash(password);
    const newUser = new User({
      username,
      password: hashedPassword,
      firstname,
      lastname,
      phone,
      address,
      email,
      gender,
      usertype: usertype || 1,
    });
    await newUser.save();

    // Return token
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({
      success: true,
      message: "User created successfully",
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route POST api/auth/login
// @desc login user
// @access public
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Simple validation
  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid username or password" });
  }
  try {
    //   Check if existing user
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect username" });
    }
    // Username found
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect password" });
    }
    // All good
    // Return token
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({
      success: true,
      message: "Logged in successfully",
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
