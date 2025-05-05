const express = require('express');
const app = express();
const { connectDb } = require('./dbConnection');
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
const emailRoutes = require('./routes/emailRoutes');
const imageUploadRoutes = require('./routes/imageUploadRoutes');
const compression = require('compression');
require("dotenv").config();
const port = process.env.PORT || 8001;

connectDb(process.env.DB_URI);

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/images', express.static('assets/uploads/images/blogs'));
app.use(compression());

app.use('/api/upload', imageUploadRoutes);
app.use('/api/send-email', emailRoutes);
app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);

app.listen(port, () => {
    console.log(`Server started at: http://localhost:${port}`);
});