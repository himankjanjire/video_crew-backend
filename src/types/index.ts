import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface AuthenticatedRequest extends Request {
  admin?: JwtPayload & { id: string; email: string };
}

export interface ContactData {
  name: string;
  email: string;
  company?: string;
  website?: string;
  projectType?: string;
  projectDetails?: string;
  budget?: string;
  timeline?: string;
  referralSource?: string;
  description?: string;
  socialMedia?: string;
  phone?: string;
  privacyPolicy?: boolean;
  status?: 'new' | 'processing' | 'completed';
  admin_notes?: string;
}

export interface PortfolioItemData {
  title: string;
  category: string;
  client?: string;
  description?: string;
  thumbnail_url: string;
  video_url: string;
  featured?: boolean;
  display_order?: number;
}

export interface AdminUserData {
  email: string;
  password: string;
  name: string;
}
