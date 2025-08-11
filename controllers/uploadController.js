const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path, {
    folder: "video-crew/images",
    resource_type: "image"
  });
  res.json({ success: true, url: result.secure_url });
};

const uploadVideo = async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path, {
    folder: "video-crew/videos",
    resource_type: "video"
  });
  res.json({ success: true, url: result.secure_url });
};

module.exports = {
  uploadImage,
  uploadVideo
};