const express = require("express");
const { verifyToken } = require("../middlewares/auth");
const {
  getPortfolioItems,
  getPortfolioItem,
  createPortfolioItem,
  updatePortfolioItem,
  deletePortfolioItem
} = require("../controllers/portfolioController");
const router = express.Router();

router.get("/", getPortfolioItems);
router.get("/:id", getPortfolioItem);
router.post("/", verifyToken, createPortfolioItem);
router.put("/:id", verifyToken, updatePortfolioItem);
router.delete("/:id", verifyToken, deletePortfolioItem);

module.exports = router;
