const express = require("express");
const { verifyToken } = require("../middlewares/auth");
const { submitContact, getContacts, updateContact } = require("../controllers/contactController");
const router = express.Router();

router.post("/", submitContact);
router.get("/", verifyToken, getContacts);
router.put("/:id", verifyToken, updateContact);

module.exports = router;
