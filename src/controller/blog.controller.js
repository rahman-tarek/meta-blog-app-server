const Blog = require("../model/blog.model");


// Get all blogs
const allBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.send(blogs);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Something went wrong" })
    }
}

// Get single blog by id
const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);
        if (!blog) {
            res.status(404).send({ message: "Blog not found" });
        }
        res.status(200).send({ message: "Blog found", blog });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: "Server Error", error: error.message })
    }
}


// Post a new blog
const addBlog = async (req, res) => {
    try {
        const newBlog = new Blog({
            ...req.body
        })
        await newBlog.save();
        res.send(newBlog)
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Server Error" })
    }
}

// Delete a blog by id
const deleteBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findByIdAndDelete(id);

        if (!blog) {
            res.status(404).send({ message: "Blog not found" });
        }
        res.status(200).send({ message: "Blog deleted successfully", blog });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: "Server Error", error: error.message })
    }
}

// Update a blog by id
const updatedBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBlog = req.body;
        const blog = await Blog.findByIdAndUpdate(id, updatedBlog, { new: true });

        if (!blog) {
            res.status(404).send({ message: "Blog not found" });
        }
        res.status(200).send({ message: "Blog updated successfully", blog });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: "Server Error", error: error.message })
    }
}

module.exports = {
    allBlogs,
    addBlog,
    getBlogById,
    deleteBlogById,
    updatedBlogById,
}