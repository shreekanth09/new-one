const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String,  required: true },
    gmail: { type: String,required: true },
    address: { type: String, required: true },
    registration_code: { type: String, required: true },
    user_type: { type: String,  required: true },
    state_code: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
