const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors');
const app = express();
const port = 5000;


// Middleware
app.use(express.json());
app.use(cors());

// Routes
const blogRoute = require('./src/routes/blog.route');
app.use('/api/v1/blogs', blogRoute);

// Mongoose configuration
async function main() {
    await mongoose.connect(process.env.MONGODB_URI);
    // Get request
    app.get("/", (req, res) => {
        res.send("Hello world");
    })
}
main().then(() => console.log("DB connected sunccessfully")).catch(err => console.log(err))



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})