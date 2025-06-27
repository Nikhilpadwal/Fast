const mongoose = require("mongoose");

const CareerSchema = new mongoose.Schema(
  {
    position: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      default: "",
    },
    lowSalary: {
      type: Number,
      default: 0,
    },
    highSalary: {
      type: Number,
      default: 1,
    },
    vacancy: {
      type: Number,
      default: 1,
    },
    otherDetails: {
      type: String,
    },
    jobdec: {
      type: String,
      require: true,
    },
  },
  { collection: "career", timestamps: true }
);

const CareerModel = mongoose.model("Career", CareerSchema); // Corrected model name capitalization
module.exports = CareerModel;
