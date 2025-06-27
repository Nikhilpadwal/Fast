const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    totalViews: {
      type: Number,
      default: 0,
    },
  },
  { collection: "blog", timestamps: true }
);

const BlogModel = mongoose.model("blog", BlogSchema); // Corrected model name capitalization
module.exports = BlogModel;
