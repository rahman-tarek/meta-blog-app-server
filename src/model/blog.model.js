const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    image: String,
    author: {
        name: String,
        image: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;