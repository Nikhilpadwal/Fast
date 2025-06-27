const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      require: true,
    },
    WhereNeedToGo: {
      type: Number,
      default: 1,
    },
    Order: {
      type: Number,
      default: 0,
    },
  },
  { collection: "Categories", timestamps: true }
);

const CategoriesModel = mongoose.model("Categories", CategoriesSchema); // Corrected model name capitalization
module.exports = CategoriesModel;
