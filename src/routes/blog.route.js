const express = require('express');
const Blog = require('../model/blog.model');
const { allBlogs, addBlog, getBlogById, deleteBlogById, updatedBlogById } = require('../controller/blog.controller');
const route = express.Router();


// Get all blogs from database
route.get("/", allBlogs);

// Post a new blog
route.post("/add-blog", addBlog);

// Get single blog by id
route.get("/:id", getBlogById);

// Delete a blog by id
route.delete("/:id", deleteBlogById);

// Update a blog by id
route.put("/:id", updatedBlogById);

module.exports = route;