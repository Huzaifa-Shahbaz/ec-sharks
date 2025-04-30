const User = require('../models/userModel');
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const jwtSecretKey = process.env.JWT_SECRET;

const createNewUser = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password, isActive, isAdminUser } = req.body;
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: "Missing required fields" })
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" })

        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password,
            phone,
            isActive,
            isAdminUser,
        });

        return res.status(201).json({
            status: 200,
            message: "User registered successfully",
            userId: newUser._id,
        });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const matchedUser = await User.findOne({ email });
        if (!matchedUser) return res.status(400).json({ message: "Invalid email" })
        const isMatch = await bcrypt.compare(password, matchedUser.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid password" })
        const token = jwt.sign(
            { userId: matchedUser._id, firstName: matchedUser.firstName, email: matchedUser.email, isAdmin: matchedUser.isAdminUser },
            jwtSecretKey,
            { expiresIn: "1d" }
        );
        return res.status(200).json({ status: 200, message: "Login successful", token });
    } catch (error) {
        console.error("Error logging in:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


const logOutUser = async (req, res) => {
    res.json({ status: 200, message: "Logged out successfully" });
}

module.exports = { createNewUser, loginUser, logOutUser }