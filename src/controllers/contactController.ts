import { Request, Response } from 'express';
import ContactInquiry from '../models/ContactInquiry';
import { sendContactEmails } from '../utils/emailService';
import { AuthenticatedRequest } from '../types';

export const submitContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const contact = await ContactInquiry.create(req.body);
    await sendContactEmails(req.body);
    res.json(contact);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to submit contact inquiry" });
  }
};

export const getContacts = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const contacts = await ContactInquiry.find().sort({ created_at: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve contacts" });
  }
};

export const updateContact = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const updatedContact = await ContactInquiry.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }
    );
    if (!updatedContact) {
      res.status(404).json({ error: "Contact not found" });
      return;
    }
    res.json(updatedContact);
  } catch (error) {
    res.status(500).json({ error: "Failed to update contact" });
  }
};