const express = require("express");
const multer = require("multer");
const { verifyToken } = require("../middlewares/auth");
const { uploadImage, uploadVideo } = require("../controllers/uploadController");
const upload = multer({ dest: "temp/" });
const router = express.Router();

router.post("/image", verifyToken, upload.single("file"), uploadImage);
router.post("/video", verifyToken, upload.single("file"), uploadVideo);

module.exports = router;
