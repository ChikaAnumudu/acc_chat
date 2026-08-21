import bcrypt from "bcryptjs";
import { generateToken } from "../lib/Utils.js";
import User from "../model/Users.js";
import { sendWelcomeEmail } from "../emails/emailHandlers.js";
import { ENV } from "../lib/env.js";

export const signUp = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    if (!fullName || !email || !password)
      return res.status(400).json({ message: "All fields are required" });

    if (password.length < 6)
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });

    if (!emailRegex.test(email))
      return res.status(400).json({ message: "Invailed email format" });

    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      // making use of code rabbit
      // before code rabbit

      // generateToken(newUser._id, res)
      // await newUser.save();

      // after code rabbit
      const savedUser = await newUser.save();
      generateToken(newUser._id, res);

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });

      try {
        await sendWelcomeEmail(
          savedUser.email,
          savedUser.fullName,
          ENV.CLIENT_URL,
        );
      } catch (error) {
        console.error("Fail to send welcome email", error);
      }
    } else {
      res.status(400).json({ message: "Invaild user data" });
    }
  } catch (error) {
    console.log("Error in signup controller: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({message: "Email and Password are required"})
  try {
    const user = await User.findOne({email})
    if (!user) return res.status(400).json({message:"Invalid credentials"})
        // Nevre tell the user which input is incorrect

    const isPasswordIncorrect = await bcrypt.compare(password, User.password)
    if (!isPasswordIncorrect) return res.status(400).json({ message: "Invalid credentials"})

    generateToken(User._id, res)

    res .status(200).json({
        _id: User._id,
        fullName: User.fullName,
        email: User.email,
        profilePic : User.profilePic,
    });
  } catch (error) {
    console.error("Error in login controller:", error);
    res.status(500).json({message: "Internal server error"})
  }
};

export const signOut = (_, res) => {
    res.cookie("jwt", "", {maxAge: 0});
    res.status(200).json({message: "Logged out successfully"});
};

export const updateProfile = async ( req, res ) => {
    try {
      const { profilePic } = req.body;
      if (!profilePic) return res.status(400).json({ message: "Profile pic is required" });

      const userId = req.user._id;

      const uploadResponse = await cloudinary.uploader.upload(profilePic);

      const uploadUser = await User.findByIdAndUpdate( 
        userId, 
        { profilePic: uploadResponse.secure_url }, 
        { new: true }
      );

      res.status(200).json(uploadUser);
    } catch (error) {
      console.error("Error to update profile:", error);
      res.status(500).json({ message: "Internal server error" });
    }
}