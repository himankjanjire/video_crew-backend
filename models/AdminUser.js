// models/AdminUser.js
const mongoose = require("mongoose");
const AdminUserSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model("AdminUser", AdminUserSchema);
