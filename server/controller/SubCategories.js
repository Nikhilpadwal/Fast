const SubCategoriesModel = require("../Model/SubCategories");

// Create a new SubCategory
const createSubCategory = async (req, res) => {
  try {
    const { Name, Categories, Order } = req.body;

    // Create a new SubCategory document
    const newSubCategory = new SubCategoriesModel({
      Name,
      Categories,
      Order,
    });

    const savedSubCategory = await newSubCategory.save();
    res.status(201).json({
      message: "SubCategory created successfully",
      subCategory: savedSubCategory,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all SubCategories
const getAllSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategoriesModel.find().populate(
      "Categories"
    );
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single SubCategory by ID
const getSubCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const subCategory = await SubCategoriesModel.findById(id).populate(
      "Categories"
    );

    if (!subCategory) {
      return res.status(404).json({ message: "SubCategory not found" });
    }

    res.status(200).json(subCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a SubCategory
const updateSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedSubCategory = await SubCategoriesModel.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );

    if (!updatedSubCategory) {
      return res.status(404).json({ message: "SubCategory not found" });
    }

    res.status(200).json({
      message: "SubCategory updated successfully",
      subCategory: updatedSubCategory,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a SubCategory
const deleteSubCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedSubCategory = await SubCategoriesModel.findByIdAndDelete(id);

    if (!deletedSubCategory) {
      return res.status(404).json({ message: "SubCategory not found" });
    }

    res.status(200).json({
      message: "SubCategory deleted successfully",
      subCategory: deletedSubCategory,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Export all controller functions
module.exports = {
  createSubCategory,
  getAllSubCategories,
  getSubCategoryById,
  updateSubCategory,
  deleteSubCategory,
};
