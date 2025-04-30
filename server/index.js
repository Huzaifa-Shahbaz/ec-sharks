const express = require('express');
const app = express();
const { connectDb } = require('./dbConnection');
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
const emailRoutes = require('./routes/emailRoutes');
const imageUploadRoutes = require('./routes/imageUploadRoutes');
require("dotenv").config();
const port = process.env.PORT || 4000;


connectDb(process.env.DB_URI);


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static('assets/uploads/images/blogs'));

app.use('/upload', imageUploadRoutes);
app.use('/send-email', emailRoutes);
app.use('/users', userRoutes);
app.use('/blogs', blogRoutes);

app.listen(port, () => console.log(`Server started at port ${port}`));