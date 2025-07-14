const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user with hashed password
    const user = await User.create({
      email,
      password: hashedPassword,
      username,
    });

    // Create token
    const token = createSecretToken(user._id);
    // Set cookie
    res
      .cookie("token", yourJwtToken, {
        httpOnly: true,
        secure: false, // true in production with HTTPS
        sameSite: "Lax", // or "None" if secure: true
      })
      .json({ status: true });

    // Send response
    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: user.username,
    });

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Signup failed", error: error.message });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect email or password" });
    }

    // Compare password
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect email or password" });
    }

    // Generate token
    const token = createSecretToken(user._id);

    // Set cookie
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    // Send response
    res.status(200).json({
      message: "User logged in successfully",
      success: true,
    });

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};
