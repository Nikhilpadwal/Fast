const axios = require("axios");

const CandidateModel = require("../Model/Candidate");

// Create Candidate
const CreateCandidate = async (req, res, next) => {
  try {
    // Destructuring request body to get candidate details
    const {
      name,
      emailId,
      phoneNumber,
      cv,
      location,
      department,
      role,
      otherDetails,
    } = req.body;

    // Create new candidate instance using request data
    const candidate = new CandidateModel({
      name,
      emailId,
      phoneNumber,
      cv,
      location,
      department,
      role,
      otherDetails,
    });

    // Save candidate to database
    await candidate.save();

    // Compose the message (you can customize this as needed)
    const message = `A new candidate has applied for the ${role} role in ${department}. Location: ${location}.`;

    // Send a POST request to /api/send-email
    await axios.post(process.env.BASE_URL + "api/send-email", {
      name,
      career: true,
      message,
    });

    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Candidate Details Send successfully.",
    });
  } catch (error) {
    // Log error and pass it to next middleware for centralized error handling
    console.error("Error adding candidate:", error);
    next(error); // Pass the error to the error-handling middleware
  }
};

// Read All Candidates
const getAllCandidate = async (req, res, next) => {
  try {
    // Fetch all candidates from the database, sorting by creation date
    const candidates = await CandidateModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      status: true,
      response_code: 200,
      data: candidates,
    });
  } catch (error) {
    // Log error and pass it to next middleware
    console.error("Error fetching candidates:", error);
    next(error);
  }
};

// Read Candidate by ID
const getCandidateById = async (req, res, next) => {
  try {
    // Find a specific candidate by ID
    const candidate = await CandidateModel.findById(req.params.id);

    if (!candidate) {
      // Throw custom error if candidate not found
      throw new Error("400::404::Candidate not found");
    }

    res.status(200).json({
      status: true,
      response_code: 200,
      data: candidate,
    });
  } catch (error) {
    // Log error and pass it to next middleware
    console.error("Error fetching candidate:", error);
    next(error);
  }
};

// Update Candidate
const updateCandidate = async (req, res, next) => {
  try {
    // Destructure the updated data from the request body
    const {
      name,
      emailId,
      phoneNumber,
      cv,
      location,
      department,
      role,
      otherDetails,
    } = req.body;

    // Find and update candidate by ID, return updated document
    const candidate = await CandidateModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        emailId,
        phoneNumber,
        cv,
        location,
        department,
        role,
        otherDetails,
      },
      { new: true, runValidators: true } // Return the updated document and apply validation
    );

    if (!candidate) {
      // Throw custom error if candidate not found
      throw new Error("400::404::Candidate not found");
    }

    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Candidate updated successfully",
      data: candidate,
    });
  } catch (error) {
    // Log error and pass it to next middleware
    console.error("Error updating candidate:", error);
    next(error);
  }
};

// Delete Candidate
const DeleteCandidate = async (req, res, next) => {
  try {
    // Find and delete candidate by ID
    const candidate = await CandidateModel.findByIdAndDelete(req.params.id);

    if (!candidate) {
      // Throw custom error if candidate not found
      throw new Error("Candidate not found");
    }

    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Candidate deleted successfully",
    });
  } catch (error) {
    // Log error and pass it to next middleware
    console.error("Error deleting candidate:", error);
    next(error);
  }
};

// Export all functions for use in routes
module.exports = {
  CreateCandidate,
  getAllCandidate,
  DeleteCandidate,
  updateCandidate,
  getCandidateById,
};
