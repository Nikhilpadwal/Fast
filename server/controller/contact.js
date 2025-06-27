const axios = require("axios");

const ContactModel = require("../Model/Contact");
// Create Contact
const createContact = async (req, res, next) => {
  try {
    const { name, email, phoneNumber, message, query, selectedProducts } =
      req.body;

    const formattedProducts = (selectedProducts || []).map((product) => {
      return `${product.Name} - ${product?.ProductCode}`;
    });

    console.log("->>>>>>>>>>>>>>>>", formattedProducts);
    // Create new contact instance
    const contact = new ContactModel({
      name,
      email,
      query,
      phoneNumber,
      message,
      selectedProducts: formattedProducts,
    });

    // Save contact to database
    await contact.save();

    await axios.post(process.env.BASE_URL + "api/send-email", {
      name,
      message,
      career: false, // For contact form
    });

    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Message Send successfully.",
      data: contact,
    });
  } catch (error) {
    console.error("Error adding contact:", error);
    // Pass error to next middleware (error handler)
    next(error); // Use next() to propagate error
  }
};

// Read All Contacts
const getAllContacts = async (req, res, next) => {
  try {
    // Fetch contacts, sorted by creation date (most recent first)
    const contacts = await ContactModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      status: true,
      response_code: 200,
      data: contacts,
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    // Pass error to next middleware
    next(error);
  }
};

// Read Contact by ID
const getContactById = async (req, res, next) => {
  try {
    const contact = await ContactModel.findById(req.params.id);
    if (!contact) {
      // Throw new error if contact is not found
      throw new Error("400::404::Contact not found");
    }
    res.status(200).json({
      status: true,
      response_code: 200,
      data: contact,
    });
  } catch (error) {
    console.error("Error fetching contact:", error);
    next(error); // Propagate error to middleware
  }
};

// Update Contact
const updateContact = async (req, res, next) => {
  try {
    const { name, email, phoneNumber, query, message } = req.body;

    // Update contact by ID and return the updated contact
    const contact = await ContactModel.findByIdAndUpdate(
      req.params.id,
      { name, email, phoneNumber, query, message },
      { new: true, runValidators: true }
    );

    if (!contact) {
      // Throw error if contact is not found
      throw new Error("400::404::Contact not found");
    }

    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Contact updated successfully",
      data: contact,
    });
  } catch (error) {
    console.error("Error updating contact:", error);
    next(error);
  }
};

// Delete Contact
const deleteContact = async (req, res, next) => {
  try {
    // Find contact by ID and delete it
    const contact = await ContactModel.findByIdAndDelete(req.params.id);

    if (!contact) {
      // Throw error if contact is not found
      throw new Error("400::404::Contact not found");
    }

    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting contact:", error);
    next(error); // Forward error to error-handling middleware
  }
};

// Export the controller functions
module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
};
