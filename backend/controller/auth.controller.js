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
      return res.status(400).json({ error: "gender will be male,female" });
    }

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password: hasedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
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
        .json({ message: "userName and password is required" });
    };

    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(401).json({ message: "Username is incorrect!" });
    };

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password || "",
    );
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Password is incorrect" });
    };

    generateTokenAndSetCookie(user._id,res);
    res.status(200).json({
       _id: user._id,
        fullName: user.fullName,
        userName: user.userName,
        profilePic: user.profilePic,
    });

  } catch (error) {
    console.log("Error is login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  };
};

// log out 
export const logOut = (req, res) => {
  try{
    res.cookie("jwt","",{maxAge:0});
    res.status(200).json({message:"Log out successfully"})
  }catch(error){
    console.log("Error is logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// me 
export const getMe = (req,res) => {
  try{
    res.status(200).json(req.user);
  }catch (error){
    console.log("Error in getMe controller", error.message);
    res.status(500).json({error:"Internal Server Error"})
  }
}
