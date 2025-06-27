const HomeBannerModel = require("../Model/HomeBanner");

// Create Home Banner
const createHomeBanner = async (req, res, next) => {
  try {
    const { Title, Image } = req.body;

    // Create a new product banner
    const productBanner = new HomeBannerModel({
      Title,
      Image,
    });

    // Save the banner to the database
    await productBanner.save();

    res.status(201).json({
      status: true,
      response_code: 201,
      message: "Home Banner created successfully",
      data: productBanner,
    });
  } catch (error) {
    console.error("Error creating product banner:", error);
    next(error);
  }
};

// Read All Home Banners
const getAllHomeBanners = async (req, res, next) => {
  try {
    // Fetch all product banners from the database
    const productBanners = await HomeBannerModel.find().sort({
      Position: 1,
    });

    res.status(200).json({
      status: true,
      response_code: 200,
      data: productBanners,
    });
  } catch (error) {
    console.error("Error fetching product banners:", error);
    next(error);
  }
};

// Read Home Banner by ID
const getHomeBannerById = async (req, res, next) => {
  try {
    const productBanner = await HomeBannerModel.findById(req.params.id);

    if (!productBanner) {
      throw new Error("Home Banner not found");
    }

    res.status(200).json({
      status: true,
      response_code: 200,
      data: productBanner,
    });
  } catch (error) {
    console.error("Error fetching product banner:", error);
    next(error);
  }
};

// Update Home Banner by ID
const updateHomeBanner = async (req, res, next) => {
  try {
    const { Title, Image } = req.body;

    // Find product banner by ID and update
    const productBanner = await HomeBannerModel.findByIdAndUpdate(
      req.params.id,
      { Title, Image },
      { new: true, runValidators: true }
    );

    if (!productBanner) {
      throw new Error("Home Banner not found");
    }

    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Home Banner updated successfully",
      data: productBanner,
    });
  } catch (error) {
    console.error("Error updating product banner:", error);
    next(error);
  }
};

// Delete Home Banner by ID
const deleteHomeBanner = async (req, res, next) => {
  try {
    const productBanner = await HomeBannerModel.findByIdAndDelete(
      req.params.id
    );

    if (!productBanner) {
      throw new Error("Home Banner not found");
    }

    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Home Banner deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting product banner:", error);
    next(error);
  }
};

const UpdateAllHomeBanner = async (req, res, next) => {
  const productContactDetail = req.body;

  console.log(req.body);
  try {
    // Update each banner's position based on the provided data

    const updatePromises = productContactDetail.map(({ _id, Position }) =>
      HomeBannerModel.findByIdAndUpdate(
        _id,
        { Position: Number(Position) },
        { new: true }
      )
    );

    await Promise.all(updatePromises); // Wait for all updates to complete

    res
      .status(200)
      .json({ status: true, message: "Positions updated successfully." });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Export controller functions
module.exports = {
  createHomeBanner,
  getAllHomeBanners,
  getHomeBannerById,
  updateHomeBanner,
  deleteHomeBanner,
  UpdateAllHomeBanner,
};
