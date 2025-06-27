const BlogModel = require("../Model/Blog");

// Create a new blog
exports.createBlog = async (req, res) => {
  try {
    const { title, description, image } = req.body;

    if (!title || !description || !image) {
      return res.status(400).json({
        status: false,
        response_code: 400,
        error: "All fields are required",
      });
    }

    const newBlog = new BlogModel({ title, description, image });
    await newBlog.save();

    const blogs = await BlogModel.find().sort({ createdAt: -1 });

    res.status(201).json({
      status: true,
      response_code: 201,
      message: "Blog created successfully",
      blog: newBlog,
      allBlogs: blogs,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, response_code: 500, error: error.message });
  }
};

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      status: true,
      response_code: 200,
      data: blogs,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, response_code: 500, error: error.message });
  }
};

// Get a blog by title
exports.getBlogByTitle = async (req, res) => {
  try {
    const blog = await BlogModel.findOne({ title: req.params.title });

    if (!blog) {
      return res
        .status(404)
        .json({ status: false, response_code: 404, error: "Blog not found" });
    }

    res.status(200).json({
      status: true,
      response_code: 200,
      data: blog,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, response_code: 500, error: error.message });
  }
};

exports.getSinglBlog = async (req, res) => {
  try {
    console.log(req.params.id);
    const blog = await BlogModel.findById(req.params.id);

    console.log(blog);
    if (!blog) {
      return res
        .status(404)
        .json({ status: false, response_code: 404, error: "Blog not found" });
    }

    res.status(200).json({
      status: true,
      response_code: 200,
      data: blog,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, response_code: 500, error: error.message });
  }
};
// Update a blog
exports.updateBlog = async (req, res) => {
  try {
    console.log("hello Party");
    const { title, description, image } = req.body;

    console.log(req.body);
    const blog = await BlogModel.findByIdAndUpdate(
      req.params.id,
      { title, description, image },
      { new: true }
    );

    console.log(blog);

    if (!blog) {
      return res
        .status(404)
        .json({ status: false, response_code: 404, error: "Blog not found" });
    }

    const blogs = await BlogModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Blog updated successfully",
      updatedBlog: blog,
      allBlogs: blogs,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, response_code: 500, error: error.message });
  }
};

// Delete a blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await BlogModel.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res
        .status(404)
        .json({ status: false, response_code: 404, error: "Blog not found" });
    }

    const blogs = await BlogModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      status: true,
      response_code: 200,
      message: "Blog deleted successfully",
      data: blogs,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, response_code: 500, error: error.message });
  }
};
