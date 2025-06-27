const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    phoneNumber: {
      type: Number,
    },
    query: {
      type: String,
    },
    message: {
      type: String,
      default: "",
    },
    selectedProducts: [String],
  },
  { collection: "contact", timestamps: true }
);

const ContactModel = mongoose.model("contact", ContactSchema); // Corrected model name capitalization
module.exports = ContactModel;
