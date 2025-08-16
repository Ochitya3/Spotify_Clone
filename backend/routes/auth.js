const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const { getToken } = require("../utils/helpers");

router.post("/register", async (req, res) => {
  try {
    const { email, password, firstName, lastName, username } = req.body;

    // console.log("Register request received:", req.body);

    // Check if user already exists
    const user = await User.findOne({ email: email });
    if (user) {
      return res
        .status(403)
        .json({ error: "A user with this email already exists!" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUserData = {
      email,
      password: hashedPassword,
      firstName,
      lastName,
      username,
    };

    // Create new user
    const newUser = await User.create(newUserData);

    // Generate token
    const token = await getToken(email, newUser);
    const userToReturn = { ...newUser.toJSON(), token };
    delete userToReturn.password;

    return res.status(200).json(userToReturn);
  } catch (error) {
    console.error("Error in register route:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(403).json({ err: "Invalid credentials" });
  }

  console.log(user);
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(403).json({ err: "Invalid credentials" });
  }

  const token = await getToken(user.email, user);
  const userToReturn = { ...user.toJSON(), token };
  delete userToReturn.password;
  return res.status(200).json(userToReturn);
});

module.exports = router;
