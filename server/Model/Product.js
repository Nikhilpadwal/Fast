const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Image: [
      {
        type: String,
        default: "",
      },
    ],
    ProductCode: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    Recommended_Adjuvant: {
      type: String,
    },
    Dosage: {
      type: String,
    },
    General_Features: [
      {
        type: String,
        required: true,
      },
    ],
    Instructions: [
      {
        type: String,
        required: true,
      },
    ],
    VideoGuides: {
      type: String,
    },
    Categories: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
    },
    SubCategories: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategories",
    },
    HotProduct: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "Product", timestamps: true }
);

const ProductModel = mongoose.model("Product", ProductSchema);
module.exports = ProductModel;
