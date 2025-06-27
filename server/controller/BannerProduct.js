const ProductBannerModel = require("../Model/BannerProduct");

// Create Product Banner
const createProductBanner = async (req, res, next) => {
  try {
    const { Title, SubTitle, Weight, Image } = req.body;

    // Create a new product banner
    const productBanner = new ProductBannerModel({
      Title,
      SubTitle,
      Weight,
      Image,
    });

    // Save the banner to the database
    await productBanner.save();

    res.status(201).json({
      status: true,
      response_code: 201,
      message: "Product Banner created successfully",
      data: productBanner,
    });
  } catch (error) {
    console.error("Error creating product banner:", error);
    next(error);
  }
};

// Read All Product Banners
const getAllProductBanners = async (req, res, next) => {
  try {
    // Fetch all product banners from the database
    const productBanners = await ProductBannerModel.find().sort({
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

// Read Product Banner by ID
const getProductBannerById = async (req, res, next) => {
  try {
    const productBanner = await ProductBannerModel.findById(req.params.id);

    if (!productBanner) {
      throw new Error("Product Banner not found");
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

// Update Product Banner by ID
const updateProductBanner = async (req, res, next) => {
  try {
    const { Title, SubTitle, Weight, Image } = req.body;

    // Find product banner by ID and update
    const productBanner = await ProductBannerModel.findByIdAndUpdate(
      req.params.id,
      { Title, SubTitle, Weight, Image },
      { new: true, runValidators: true }
    );

    if (!productBanner) {
      throw new Error("Product Banner not found");
    }

    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Product Banner updated successfully",
      data: productBanner,
    });
  } catch (error) {
    console.error("Error updating product banner:", error);
    next(error);
  }
};

// Delete Product Banner by ID
const deleteProductBanner = async (req, res, next) => {
  try {
    const productBanner = await ProductBannerModel.findByIdAndDelete(
      req.params.id
    );

    if (!productBanner) {
      throw new Error("Product Banner not found");
    }

    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Product Banner deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting product banner:", error);
    next(error);
  }
};

const UpdateAllBanner = async (req, res, next) => {
  const productContactDetail = req.body;

  console.log(req.body);
  try {
    // Update each banner's position based on the provided data

    const updatePromises = productContactDetail.map(({ _id, Position }) =>
      ProductBannerModel.findByIdAndUpdate(
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
  createProductBanner,
  getAllProductBanners,
  getProductBannerById,
  updateProductBanner,
  deleteProductBanner,
  UpdateAllBanner,
};
