const mongoose = require("mongoose");

const SubCategoriesSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      require: true,
    },
    Categories: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
    },
    Order: {
      type: Number,
      default: 0,
    },
  },
  { collection: "SubCategories", timestamps: true }
);

const SubCategoriesModel = mongoose.model("SubCategories", SubCategoriesSchema);
module.exports = SubCategoriesModel;
