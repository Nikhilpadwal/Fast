const CategoriesModel = require("../Model/Categories");

const createCategory = async (req, res, next) => {
  try {
    const { Name, Order } = req.body;

    const category = await CategoriesModel.create({ Name, Order });

    res.status(201).json({
      status: true,
      response_code: 201,
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    console.error("Error creating category:", error);
    next(error);
  }
};

// READ all categories
const getAllCategories = async (req, res, next) => {
  try {
    const categories = await CategoriesModel.find().sort({ Order: 1 }); // Sort by Order if needed

    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Categories fetched successfully",
      data: categories,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    next(error);
  }
};

// READ a single category by ID
const getCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Fetch the category by ID
    const category = await CategoriesModel.findById(id);

    if (!category) {
      throw new Error("400::404::Category not found");
    }

    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Category fetched successfully",
      data: category,
    });
  } catch (error) {
    console.error("Error fetching category:", error);
    next(error);
  }
};

// UPDATE a category by ID
const updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { Name, Order } = req.body;

    // Update the category by ID
    const category = await CategoriesModel.findByIdAndUpdate(
      id,
      { Name, Order },
      { new: true, runValidators: true }
    );

    if (!category) {
      throw new Error("400::404::Category not found");
    }

    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Category updated successfully",
      data: category,
    });
  } catch (error) {
    console.error("Error updating category:", error);
    next(error);
  }
};

// DELETE a category by ID
const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Delete the category by ID
    const category = await CategoriesModel.findByIdAndDelete(id);

    if (!category) {
      throw new Error("400::404::Category not found");
    }

    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Category deleted successfully",
      data: category,
    });
  } catch (error) {
    console.error("Error deleting category:", error);
    next(error);
  }
};

// Exporting all CRUD functions
module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
