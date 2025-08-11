import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import AdminUser from '../models/AdminUser';

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const admin = await AdminUser.findOne({ email });
    
    if (!admin) {
      res.status(401).json({ success: false, message: "Invalid credentials" });
      return;
    }
    
    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      res.status(401).json({ success: false, message: "Invalid credentials" });
      return;
    }
    
    const token = jwt.sign(
      { id: admin._id, email: admin.email }, 
      process.env.JWT_SECRET as string, 
      { expiresIn: "2d" }
    );
    
    res.json({ 
      success: true, 
      token, 
      user: { id: admin._id, email: admin.email, name: admin.name } 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
