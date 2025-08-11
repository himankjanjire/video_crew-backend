import express from 'express';
import { verifyToken } from '../middlewares/auth';
import {
  getPortfolioItems,
  getPortfolioItem,
  createPortfolioItem,
  updatePortfolioItem,
  deletePortfolioItem
} from '../controllers/portfolioController';

const router = express.Router();

router.get("/", getPortfolioItems);
router.get("/:id", getPortfolioItem);
router.post("/", verifyToken, createPortfolioItem);
router.put("/:id", verifyToken, updatePortfolioItem);
router.delete("/:id", verifyToken, deletePortfolioItem);

export default router;