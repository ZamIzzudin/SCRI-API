/** @format */

import mongoose from "mongoose";

const user_scheme = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("users", user_scheme);

export default User;
