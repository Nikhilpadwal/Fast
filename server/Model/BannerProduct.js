const mongoose = require("mongoose");

const ProductBannerSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      require: true,
    },
    SubTitle: {
      type: String,
      require: true,
    },
    Weight: {
      type: String,
      require: true,
    },
    Image: {
      type: String,
      require: true,
    },
    Position: {
      type: Number,
      default: 0,
    },
  },
  { collection: "bannerProduct", timestamps: true }
);

const ProductBannerModel = mongoose.model("bannerProduct", ProductBannerSchema); // Corrected model name capitalization
module.exports = ProductBannerModel;
