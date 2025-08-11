const PortfolioItem = require("../models/PortfolioItem");

const getPortfolioItems = async (req, res) => {
  res.json(await PortfolioItem.find().sort({ display_order: 1, created_at: -1 }));
};

const getPortfolioItem = async (req, res) => {
  res.json(await PortfolioItem.findById(req.params.id));
};

const createPortfolioItem = async (req, res) => {
  res.json(await PortfolioItem.create(req.body));
};

const updatePortfolioItem = async (req, res) => {
  res.json(await PortfolioItem.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

const deletePortfolioItem = async (req, res) => {
  await PortfolioItem.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

module.exports = {
  getPortfolioItems,
  getPortfolioItem,
  createPortfolioItem,
  updatePortfolioItem,
  deletePortfolioItem
};