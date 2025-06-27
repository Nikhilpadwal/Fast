const { default: mongoose } = require("mongoose");
const ProductModel = require("../Model/Product"); // Adjust the path if needed
const SubCategoriesModel = require("../Model/SubCategories");
const CategoriesModel = require("../Model/Categories");

// 1. Create a Product
const ProductCreate = async (req, res, next) => {
  try {
    console.log(req.body);

    const {
      name,
      Image,
      ProductCode,
      description,
      General_Features,
      VideoGuides,
      Instructions,
      Categories,
      SubCategories,
      Recommended_Adjuvant,
      Dosage,
    } = req.body;

    console.log(req.body);
    let convertedCategories;
    let newProduct;

    if (Categories) {
      convertedCategories = new mongoose.Types.ObjectId(Categories);
      newProduct = new ProductModel({
        Name: name,
        Image,
        ProductCode,
        description,
        General_Features,
        VideoGuides,
        Instructions,
        Categories: convertedCategories,
        Recommended_Adjuvant,
        Dosage,
      });
    } else {
      convertedCategories = new mongoose.Types.ObjectId(SubCategories);
      newProduct = new ProductModel({
        Name: name,
        Image,
        ProductCode,
        description,
        General_Features,
        VideoGuides,
        Instructions,
        SubCategories: convertedCategories,
        Recommended_Adjuvant,
        Dosage,
      });
    }

    console.log(newProduct);

    await newProduct.save();

    res.status(201).json({
      status: true,
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    next(error);
  }
};

// 2. Get All Products
const excludedCategoryIds = [
  "677ccb55c1fc3dae9eb047e7",
  "677ccb55c1fc3dae9eb04711",
  "677ccb55c1fc3dae9e3047f7",
  "677ccbc9c1fc3dae9eb047ff",
  "677ccba2c1fc3dae9eb047fb",
  "677ccbe9c1fc3dae9eb04803",
  "677ccda6c1fc3dae9eb04813",
  "677ccbb1c1fc3dae9eb047fd",
  "677ccbd6c1fc3dae9eb04801",
];

const GetAllProduct = async (req, res, next) => {
  try {
    let products = await ProductModel.find()
      .populate("SubCategories")
      .populate("Categories")
      .exec();

    // Filter out products with excluded categories or subcategories
    products = products.filter(
      (product) =>
        !(
          product.Categories &&
          excludedCategoryIds.includes(product.Categories._id.toString())
        ) &&
        !(
          product.SubCategories &&
          excludedCategoryIds.includes(product.SubCategories._id.toString())
        )
    );

    // Extract unique categories and subcategories
    const categories = products
      .filter((product) => product.Categories)
      .map((product) => product.Categories);

    const subCategories = products
      .filter((product) => product.SubCategories)
      .map((product) => product.SubCategories);

    // Remove duplicates
    const uniqueCategories = Array.from(
      new Map(categories.map((cat) => [cat._id.toString(), cat])).values()
    );

    const uniqueSubCategories = Array.from(
      new Map(
        subCategories.map((subCat) => [subCat._id.toString(), subCat])
      ).values()
    );

    res.status(200).json({
      status: true,
      message: "Products fetched successfully",
      categories: uniqueCategories,
      subCategories: uniqueSubCategories,
      products,
    });
  } catch (error) {
    next(error);
  }
};
const GetAllProductForData = async (req, res, next) => {
  try {
    let products = await ProductModel.find()
      .populate("SubCategories")
      .populate("Categories")
      .exec();

    // Extract unique categories and subcategories
    const categories = products
      .filter((product) => product.Categories)
      .map((product) => product.Categories);

    const subCategories = products
      .filter((product) => product.SubCategories)
      .map((product) => product.SubCategories);

    // Remove duplicates
    const uniqueCategories = Array.from(
      new Map(categories.map((cat) => [cat._id.toString(), cat])).values()
    );

    const uniqueSubCategories = Array.from(
      new Map(
        subCategories.map((subCat) => [subCat._id.toString(), subCat])
      ).values()
    );

    res.status(200).json({
      status: true,
      message: "Products fetched successfully",
      categories: uniqueCategories,
      subCategories: uniqueSubCategories,
      products,
    });
  } catch (error) {
    next(error);
  }
};
const GetAllProductOfSameCategroy = async (req, res, next) => {
  try {
    const { productName, code } = req.params;
    console.log(req.params);
    const product = await ProductModel.findOne({
      Name: productName,
      ProductCode: code,
    });

    let products = await ProductModel.find({
      $or: [
        {
          SubCategories: { $in: product.SubCategories },
          Categories: { $exists: false },
        },
        {
          Categories: { $in: product.Categories },
          SubCategories: { $exists: false },
        },
      ],
    })
      .populate("SubCategories")
      .populate("Categories")
      .exec();

    // Filter out products with excluded categories or subcategories
    products = products.filter(
      (product) =>
        !(
          product.Categories &&
          excludedCategoryIds.includes(product.Categories._id.toString())
        ) &&
        !(
          product.SubCategories &&
          excludedCategoryIds.includes(product.SubCategories._id.toString())
        )
    );

    // Extract unique categories and subcategories
    const categories = products
      .filter((product) => product.Categories)
      .map((product) => product.Categories);

    const subCategories = products
      .filter((product) => product.SubCategories)
      .map((product) => product.SubCategories);

    // Remove duplicates
    const uniqueCategories = Array.from(
      new Map(categories.map((cat) => [cat._id.toString(), cat])).values()
    );

    const uniqueSubCategories = Array.from(
      new Map(
        subCategories.map((subCat) => [subCat._id.toString(), subCat])
      ).values()
    );

    res.status(200).json({
      status: true,
      message: "Products fetched successfully",
      categories: uniqueCategories,
      subCategories: uniqueSubCategories,
      products,
    });
  } catch (error) {
    next(error);
  }
};

const GetAllProductOfSameCategroyByName = async (req, res, next) => {
  try {
    const { productName } = req.params;
    console.log(req.params);
    const product = await ProductModel.findOne({
      Name: productName,
    });

    console.log(product);

    let products = await ProductModel.find({
      $or: [
        {
          SubCategories: { $in: product.SubCategories },
          Categories: { $exists: false },
        },
        {
          Categories: { $in: product.Categories },
          SubCategories: { $exists: false },
        },
      ],
    })
      .populate("SubCategories")
      .populate("Categories")
      .exec();

    // Filter out products with excluded categories or subcategories
    products = products.filter(
      (product) =>
        !(
          product.Categories &&
          excludedCategoryIds.includes(product.Categories._id.toString())
        ) &&
        !(
          product.SubCategories &&
          excludedCategoryIds.includes(product.SubCategories._id.toString())
        )
    );

    // Extract unique categories and subcategories
    const categories = products
      .filter((product) => product.Categories)
      .map((product) => product.Categories);

    const subCategories = products
      .filter((product) => product.SubCategories)
      .map((product) => product.SubCategories);

    // Remove duplicates
    const uniqueCategories = Array.from(
      new Map(categories.map((cat) => [cat._id.toString(), cat])).values()
    );

    const uniqueSubCategories = Array.from(
      new Map(
        subCategories.map((subCat) => [subCat._id.toString(), subCat])
      ).values()
    );

    res.status(200).json({
      status: true,
      message: "Products fetched successfully",
      categories: uniqueCategories,
      subCategories: uniqueSubCategories,
      products,
    });
  } catch (error) {
    next(error);
  }
};

const getAllProductByCategory = async (req, res, next) => {
  try {
    const { category, value } = req.body;

    var categoryData;
    var ProductList;

    if (value != "1") {
      categoryData = await CategoriesModel.findOne({ Name: category });
      // console.log(categoryData);
      ProductList = await ProductModel.find({
        Categories: categoryData?._id,
      }).sort({ HotProduct: -1 });
    } else {
      categoryData = await SubCategoriesModel.findOne({ Name: category }).sort({
        HotProduct: -1,
      });
      console.log("_> SubCa", categoryData);
      if (!categoryData) {
        return res.status(200).json({
          status: true,
          message: "Products fetched successfully",
          data: [],
        });
      }
      ProductList = await ProductModel.find({
        SubCategories: categoryData?._id,
      });
    }
    // console.log(ProductList);

    if (!ProductList.length) {
      return res.status(404).json({
        status: false,
        message: `No products found for category: ${category}`,
        data: [],
      });
    }

    ProductList.sort((a, b) => {
      if (a.HotProduct === true && b.HotProduct === false) {
        return -1; // `a` comes first if it's HotProduct: true
      } else if (a.HotProduct === false && b.HotProduct === true) {
        return 1; // `b` comes first if it's HotProduct: true
      }
      return 0; // No change if both are the same (either true or false)
    });

    // Successful response
    res.status(200).json({
      status: true,
      message: "Products fetched successfully",
      data: ProductList,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// 3. Get a Single Product by ID
const getProductById = async (req, res, next) => {
  try {
    const product = await ProductModel.findById(req.params.id)
      .populate("SubCategories")
      .populate("Categories");

    if (!product) {
      return res.status(404).json({
        status: false,
        message: "Product not found",
        data: null,
      });
    }

    res.status(200).json({
      status: true,
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const getProductByparamas = async (req, res, next) => {
  try {
    const { productName, code } = req.params;
    console.log(req.params);
    const product = await ProductModel.findOne({
      Name: productName,
      ProductCode: code,
    })
      .populate("SubCategories")
      .populate("Categories");

    if (!product) {
      return res.status(404).json({
        status: false,
        message: "Product not found",
        data: null,
      });
    }

    res.status(200).json({
      status: true,
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const getProductByparamasProductName = async (req, res, next) => {
  try {
    const { productName } = req.params;
    console.log(req.params);
    const product = await ProductModel.findOne({
      Name: productName,
    })
      .populate("SubCategories")
      .populate("Categories");

    if (!product) {
      return res.status(404).json({
        status: false,
        message: "Product not found",
        data: null,
      });
    }

    res.status(200).json({
      status: true,
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// 4. Update a Product by ID
const UpdateProductById = async (req, res, next) => {
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        status: false,
        message: "Product not found",
        data: null,
      });
    }

    res.status(200).json({
      status: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};

// 5. Delete a Product by ID
const DeleteProductById = async (req, res, next) => {
  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({
        status: false,
        message: "Product not found",
        data: null,
      });
    }

    res.status(200).json({
      status: true,
      message: "Product deleted successfully",
      data: deletedProduct,
    });
  } catch (error) {
    next(error);
  }
};

const getCategoryAndSubCategory = async (req, res, next) => {};

module.exports = {
  ProductCreate,
  DeleteProductById,
  UpdateProductById,
  getProductById,
  GetAllProduct,
  getAllProductByCategory,
  getProductByparamas,
  getProductByparamasProductName,
  GetAllProductOfSameCategroy,
  GetAllProductOfSameCategroyByName,
  GetAllProductForData,
  getCategoryAndSubCategory,
};
