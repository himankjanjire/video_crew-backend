const ContactInquiry = require("../models/ContactInquiry");
const { sendContactEmails } = require("../utils/emailService");

const submitContact = async (req, res) => {
  try {
    const contact = await ContactInquiry.create(req.body);
    await sendContactEmails(req.body);
    res.json(contact);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to submit contact inquiry" });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await ContactInquiry.find().sort({ created_at: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve contacts" });
  }
};

const updateContact = async (req, res) => {
  try {
    const updatedContact = await ContactInquiry.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }
    );
    if (!updatedContact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.json(updatedContact);
  } catch (error) {
    res.status(500).json({ error: "Failed to update contact" });
  }
};

module.exports = {
  submitContact,
  getContacts,
  updateContact
};
