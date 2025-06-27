// Import the Career Model
const CareerModel = require("../Model/Career");
// Load environment variables from .env file
require("dotenv").config("../.env");

/**
 * @desc Add a new Job Post
 * @route POST /api/jobs
 * @access Public
 */

const addJobPost = async (req, res, next) => {
  try {
    // Destructure job post data from request body
    const {
      position,
      role,
      lowSalary,
      highSalary,
      vacancy,
      otherDetails,
      jobdec,
    } = req.body;

    // Create a new instance of CareerModel with the data
    const jobPost = new CareerModel({
      position,
      role,
      lowSalary,
      highSalary,
      vacancy,
      otherDetails,
      jobdec,
    });

    // Save the job post to the database
    await jobPost.save();

    // Send success response
    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Job Post added successfully.",
    });
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error adding job post:", error);

    // Pass the error to the next middleware (error handler)
    next(error);
  }
};

/**
 * @desc Get all Job Posts
 * @route GET /api/jobs
 * @access Public
 */
const getAllJobPosts = async (req, res, next) => {
  try {
    // Fetch all job posts from the database and sort by creation date (most recent first)
    const jobPosts = await CareerModel.find().sort({ createdAt: -1 });

    // Send success response with the list of job posts
    res.status(200).json({
      status: true,
      response_code: 200,
      data: jobPosts,
    });
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error fetching job posts:", error);

    // Pass the error to the next middleware (error handler)
    next(error);
  }
};

/**
 * @desc Get a Job Post by ID
 * @route GET /api/jobs/:id
 * @access Public
 */
const getJobPostById = async (req, res, next) => {
  try {
    // Find the job post by ID
    const jobPost = await CareerModel.findById(req.params.id);

    // If job post not found, throw an error
    if (!jobPost) {
      throw new Error("404::404::Job Post not found.");
    }

    // Send success response with the job post data
    res.status(200).json({
      status: true,
      response_code: 200,
      data: jobPost,
    });
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error fetching job post:", error);

    // Pass the error to the next middleware (error handler)
    next(error);
  }
};

/**
 * @desc Update a Job Post
 * @route PUT /api/jobs/:id
 * @access Public
 */
const updateJobPost = async (req, res, next) => {
  try {
    // Find the job post by ID and update it with the new data
    const jobPost = await CareerModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // Return the updated job post
    );

    // If job post not found, throw an error
    if (!jobPost) {
      throw new Error("404::404::Job Post not found.");
    }

    // Send success response with the updated job post data
    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Job Post updated successfully",
      data: jobPost,
    });
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error updating job post:", error);

    // Pass the error to the next middleware (error handler)
    next(error);
  }
};

/**
 * @desc Delete a Job Post
 * @route DELETE /api/jobs/:id
 * @access Public
 */
const deleteJobPost = async (req, res, next) => {
  try {
    // Find the job post by ID and delete it
    const jobPost = await CareerModel.findByIdAndDelete(req.params.id);

    // If job post not found, return a 404 response
    if (!jobPost) {
      throw new Error("404::404::Job Post not found.");
    }

    // Send success response after deletion
    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Job Post deleted successfully",
    });
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error deleting job post:", error);

    // Pass the error to the next middleware (error handler)
    next(error);
  }
};

// Export all the job post controller functions
module.exports = {
  deleteJobPost,
  getJobPostById,
  updateJobPost,
  getAllJobPosts,
  addJobPost,
};
