import mongoose, { Document, Schema } from 'mongoose';
import { PortfolioItemData } from '../types';

export interface IPortfolioItem extends PortfolioItemData, Document {
  created_at: Date;
  updated_at: Date;
}

const PortfolioItemSchema: Schema = new Schema({
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

export default mongoose.model<IPortfolioItem>('PortfolioItem', PortfolioItemSchema);