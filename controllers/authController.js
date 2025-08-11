const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const AdminUser = require("../models/AdminUser");

const login = async (req, res) => {
  const { email, password } = req.body;
  const admin = await AdminUser.findOne({ email });
  if (!admin) return res.status(401).json({ success: false, message: "Invalid credentials" });
  const match = await bcrypt.compare(password, admin.password);
  if (!match) return res.status(401).json({ success: false, message: "Invalid credentials" });
  const token = jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: "2d" });
  res.json({ success: true, token, user: { id: admin._id, email: admin.email, name: admin.name } });
};

module.exports = { login };