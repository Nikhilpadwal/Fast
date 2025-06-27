const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    emailId: {
      type: String,
      required: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
    },
    phoneNumber: {
      type: String,
      match: [/^\d{10}$/, "Please use a valid 10-digit phone number."],
    },
    cv: {
      type: String,
    },
    role: {
      type: String,
    },
    otherDetails: {
      type: String,
    },
  },
  { collection: "candidate", timestamps: true }
);

const CandidateModel = mongoose.model("Candidate", CandidateSchema);
module.exports = CandidateModel;
