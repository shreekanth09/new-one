
const express = require("express");
const User = require("../models/userModel");
const router = express.Router();

// User Registration
router.post("/register", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Registration failed", details: error.message });
    }
});

// User Login
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username, password });
        if (!user) return res.status(401).json({ error: "Invalid credentials" });
        res.json({ message: "Login successful!", user });
    } catch (error) {
        res.status(500).json({ error: "Login failed", details: error.message });
    }
});

// Fetch All Users for Dashboard
router.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

module.exports = router;
