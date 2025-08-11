// models/PortfolioItem.js
const mongoose = require("mongoose");
const PortfolioItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  client: String,
  description: String,
  thumbnail_url: { type: String, required: true },
  video_url: { type: String, required: true },
  featured: { type: Boolean, default: false },
  display_order: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model("PortfolioItem", PortfolioItemSchema);
