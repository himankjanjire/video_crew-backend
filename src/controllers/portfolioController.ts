import { Request, Response } from 'express';
import PortfolioItem from '../models/PortfolioItem';
import { AuthenticatedRequest } from '../types';

export const getPortfolioItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const items = await PortfolioItem.find().sort({ display_order: 1, created_at: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve portfolio items" });
  }
};

export const getPortfolioItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const item = await PortfolioItem.findById(req.params.id);
    if (!item) {
      res.status(404).json({ error: "Portfolio item not found" });
      return;
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve portfolio item" });
  }
};

export const createPortfolioItem = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const item = await PortfolioItem.create(req.body);
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Failed to create portfolio item" });
  }
};

export const updatePortfolioItem = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const item = await PortfolioItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) {
      res.status(404).json({ error: "Portfolio item not found" });
      return;
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Failed to update portfolio item" });
  }
};

export const deletePortfolioItem = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const item = await PortfolioItem.findByIdAndDelete(req.params.id);
    if (!item) {
      res.status(404).json({ error: "Portfolio item not found" });
      return;
    }
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete portfolio item" });
  }
};