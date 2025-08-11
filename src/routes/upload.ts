import express from 'express';
import multer from 'multer';
import { verifyToken } from '../middlewares/auth';
import { uploadImage, uploadVideo } from '../controllers/uploadController';

const upload = multer({ dest: "temp/" });
const router = express.Router();

router.post("/image", verifyToken, upload.single("file"), uploadImage);
router.post("/video", verifyToken, upload.single("file"), uploadVideo);

export default router;