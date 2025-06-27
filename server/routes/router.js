const express = require("express");
const router = express.Router();
const multer = require("multer");
const AWS = require("aws-sdk");
const Jimp = require("jimp");

const {
  createProductBanner,
  getAllProductBanners,
  getProductBannerById,
  updateProductBanner,
  deleteProductBanner,
  UpdateAllBanner,
} = require("../controller/BannerProduct");

const {
  CreateCandidate,
  getAllCandidate,
  updateCandidate,
  DeleteCandidate,
  getCandidateById,
} = require("../controller/Candidate");

const {
  addJobPost,
  getAllJobPosts,
  updateJobPost,
  deleteJobPost,
  getJobPostById,
} = require("../controller/career");

const {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controller/contact");

const {
  UpdateAllHomeBanner,
  deleteHomeBanner,
  updateHomeBanner,
  getHomeBannerById,
  getAllHomeBanners,
  createHomeBanner,
} = require("../controller/HomeBanner");

const {
  ProductCreate,
  GetAllProduct,
  getProductById,
  UpdateProductById,
  DeleteProductById,
  getAllProductByCategory,
  getProductByparamas,
  getProductByparamasProductName,
  GetAllProductOfSameCategroy,
  GetAllProductOfSameCategroyByName,
  GetAllProductForData,
} = require("../controller/Product");
const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controller/Categories");
const {
  createSubCategory,
  getAllSubCategories,
  getSubCategoryById,
  updateSubCategory,
  deleteSubCategory,
} = require("../controller/SubCategories");
const {
  createBlog,
  getAllBlogs,
  getBlogByTitle,
  updateBlog,
  deleteBlog,
  getSinglBlog,
} = require("../controller/Blog");
const { sendMail } = require("../controller/email");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});
const S3_BUCKET_NAME = "kanhaart";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/uploadImage", upload.array("images"), async (req, res) => {
  console.log("hello");
  if (!req.files || req.files.length === 0) {
    return res
      .status(400)
      .json({ success: false, message: "No files uploaded" });
  }

  try {
    const uploadPromises = req.files.map(async (file) => {
      // Process the image with sharp to resize and convert to WebP format
      const image = await Jimp.read(file.buffer);
      image.resize(800, Jimp.AUTO).quality(80); // Resize and adjust quality

      // Get buffer in WebP format
      const optimizedImage = await image.getBufferAsync(Jimp.MIME_WEBP);

      const params = {
        Bucket: S3_BUCKET_NAME,
        Key: `productsNew/${Date.now()}_${file?.originalname?.replace(
          /\.[^/.]+$/,
          ""
        )}.webp`, // Ensure unique name and WebP extension
        Body: optimizedImage,
        ContentType: "image/webp",
      };

      return s3.upload(params).promise();
    });

    const results = await Promise.all(uploadPromises);
    const urls = results.map((result) => result?.Location);

    res.json({
      success: true,
      message: "Images Uploaded and Optimized Successfully",
      urls: urls,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error uploading images",
    });
  }
});

router.post("/uploadBanner", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: "No file uploaded" });
  }

  try {
    // Convert the image to WebP format without resizing
    const image = await Jimp.read(req?.file?.buffer);
    image.quality(100); // Set WebP quality to 100%

    const webpImage = await image.getBufferAsync(Jimp.MIME_WEBP);

    const params = {
      Bucket: S3_BUCKET_NAME,
      Key: `productsNew/${Date.now()}_${req?.file?.originalname?.replace(
        /\.[^/.]+$/,
        ""
      )}.webp`, // Unique name with .webp extension
      Body: webpImage,
      ContentType: "image/webp",
    };

    // Upload the WebP image to S3
    const result = await s3.upload(params).promise();

    res.json({
      success: true,
      message: "Image Uploaded and Converted to WebP Successfully",
      url: result.Location,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error uploading image",
    });
  }
});

router.post("/pdfFile", upload.single("pdf"), async (req, res, next) => {
  const params = {
    Bucket: S3_BUCKET_NAME,
    Key: `pdfs/${req?.file?.originalname}`,
    Body: req?.file?.buffer,
    ContentType: "application/pdf", // Set the content type to 'application/pdf' for PDF files
  };

  s3.upload(params, (error, data) => {
    if (error) {
      console.error("Error uploading PDF:", error);
      res.status(500).json({ success: false, message: "Failed to upload PDF" });
    } else {
      res.json({
        success: true,
        message: "PDF Uploaded Successfully",
        url: data?.Location,
      });
    }
  });
});

// Candidagte Api
router.post("/CreateCandidate", CreateCandidate);
router.get("/getAllCandidate", getAllCandidate);
router.put("/updateCandidate/:id", updateCandidate);
router.delete("/DeleteCandidate/:id", DeleteCandidate);
router.get("/getCandidateById/:id", getCandidateById);

// Career Post Api
router.post("/addJobPost", addJobPost);
router.get("/getAllJobPosts", getAllJobPosts);
router.put("/updateJobPost/:id", updateJobPost);
router.delete("/deleteJobPost/:id", deleteJobPost);
router.get("/getJobPostById/:id", getJobPostById);

// Route to create a new contact
router.post("/createContact", createContact);
router.get("/getAllContacts", getAllContacts);
router.get("/getContactById/:id", getContactById);
router.put("/updateContact/:id", updateContact);
router.delete("/deleteContact/:id", deleteContact);

///Product Banner api
router.post("/productBanner", createProductBanner);
router.get("/productBanners", getAllProductBanners);
router.get("/productBanner/:id", getProductBannerById);
router.put("/productBanner/:id", updateProductBanner);
router.delete("/productBanner/:id", deleteProductBanner);
router.put("/UpdateAllBanner", UpdateAllBanner);

///Home Banner api
router.post("/HomeBanner", createHomeBanner);
router.get("/HomeBanners", getAllHomeBanners);
router.get("/HomeBanner/:id", getHomeBannerById);
router.put("/HomeBanner/:id", updateHomeBanner);
router.delete("/HomeBanner/:id", deleteHomeBanner);
router.put("/UpdateAllHomeBanner", UpdateAllHomeBanner);

// Define routes
router.post("/ProductCreate", ProductCreate);
router.get("/GetAllProduct", GetAllProduct);
router.get("/GetAllProductForDashboard", GetAllProductForData);
router.get("/getProductById/:id", getProductById);
router.put("/UpdateProductById/:id", UpdateProductById);
router.delete("/DeleteProductById/:id", DeleteProductById);
router.post("/getAllProductByCategory", getAllProductByCategory);
router.get(
  "/GetAllProductOfSameCategroy/:productName/:code",
  GetAllProductOfSameCategroy
);
router.get(
  "/GetAllProductOfSameCategroy/:productName",
  GetAllProductOfSameCategroyByName
);
router.get("/getProductByparamas/:productName/:code", getProductByparamas);
router.get("/getProductByparamas/:productName", getProductByparamasProductName);
// router.get("/getCategoryAndSubCategory", getCategoryAndSubCategory);

//category
router.post("/createCategory", createCategory);
router.get("/getAllCategories", getAllCategories);
router.get("/getCategoryById/:id", getCategoryById);
router.put("/updateCategory/:id", updateCategory);
router.delete("/deleteCategory/:id", deleteCategory);

//Subcategory
router.post("/createSubCategory", createSubCategory);
router.get("/getAllSubCategories", getAllSubCategories);
router.get("/getSubCategoryById/:id", getSubCategoryById);
router.put("/updateSubCategory/:id", updateSubCategory);
router.delete("/deleteSubCategory/:id", deleteSubCategory);

//blog
router.post("/createBlog", createBlog);
router.get("/getAllBlogs", getAllBlogs);
router.get("/getBlogByTitle/:title", getBlogByTitle);
router.put("/updateBlog/:id", updateBlog);
router.get("/getBlogById/:id", getSinglBlog);
router.delete("/deleteBlog/:id", deleteBlog);

router.post("/send-email", sendMail);

module.exports = router;
