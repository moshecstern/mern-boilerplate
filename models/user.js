const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String,
    username: String,
    password: String,
    email: String,
    role: Number
});

const User = mongoose.model("User", userSchema);

module.exports = User;