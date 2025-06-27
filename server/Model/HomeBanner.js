const mongoose = require("mongoose");

const HomeBannerSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
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
  { collection: "HomeProduct", timestamps: true }
);

const HomeBannerModel = mongoose.model("HomeBanner", HomeBannerSchema); // Corrected model name capitalization
module.exports = HomeBannerModel;
