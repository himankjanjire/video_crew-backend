import mongoose, { Document, Schema } from 'mongoose';
import { ContactData } from '../types';

export interface IContactInquiry extends ContactData, Document {
  created_at: Date;
  updated_at: Date;
}

const ContactInquirySchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: String,
  website: String,
  projectType: String,
  projectDetails: String,
  budget: String,
  timeline: String,
  referralSource: String,
  description: String,
  socialMedia: String,
  privacyPolicy: { type: Boolean, default: false },
  status: { 
    type: String, 
    enum: ["new", "processing", "completed"], 
    default: "new" 
  },
  admin_notes: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export default mongoose.model<IContactInquiry>('ContactInquiry', ContactInquirySchema);