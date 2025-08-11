import mongoose, { Document, Schema } from 'mongoose';
import { AdminUserData } from '../types';

export interface IAdminUser extends AdminUserData, Document {
  created_at: Date;
}

const AdminUserSchema: Schema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

export default mongoose.model<IAdminUser>('AdminUser', AdminUserSchema);
