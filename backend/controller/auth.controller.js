import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

// sign up
export const singUp = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if (!fullName || !userName || !password || !confirmPassword || !gender) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password don't match" });
    }

    const salt = await bcrypt.genSalt(10);
    const hasedPassword = await bcrypt.hash(password, salt);

    const user = await User.findOne({ userName });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    if (gender !== "male" && gender !== "female") {
      return res.status(400).json({ error: "gender will be male, female" });
    }

    const bgColors = [
      "0D8F81",
      "2E86C1",
      "2874A6",
      "1F618D",
      "F39C12",
      "E74C3C",
      "8E44AD",
      "16A085",
      "27AE60",
      "D35400",
    ];
    const textColors = ["fff", "000", "f0f0f0", "333333", "eeeeee"];
    const randomBgColor = bgColors[Math.floor(Math.random() * bgColors?.length)];
    const randomTextColor =
      textColors[Math.floor(Math.random() * textColors?.length)];

    // const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    // const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const profilePic = `https://ui-avatars.com/api/?name=${fullName}&background=${randomBgColor}&color=${randomTextColor}&length=1`;

    const newUser = new User({
      fullName,
      userName,
      password: hasedPassword,
      gender,
      profilePic,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error is singup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// login
export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return res
        .status(400)
        .json({ error: "userName and password is required" });
    }

    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(401).json({ error: "Username is incorrect!" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password || "",
    );
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: "Password is incorrect" });
    }

    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error is login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// log out
export const logOut = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Log out successfully" });
  } catch (error) {
    console.log("Error is logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// me
export const getMe = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log("Error in getMe controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
