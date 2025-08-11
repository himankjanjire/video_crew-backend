import express from 'express';
import { verifyToken } from '../middlewares/auth';
import { submitContact, getContacts, updateContact } from '../controllers/contactController';

const router = express.Router();

router.post("/", submitContact);
router.get("/", verifyToken, getContacts);
router.put("/:id", verifyToken, updateContact);

export default router;