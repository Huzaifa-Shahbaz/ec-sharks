const Blog = require('../models/blogsModel');
const path = require('path');
const fs = require('fs');


const createNewBlog = async (req, res) => {
    const { title, shortDescription, longDescription, metaTitle, metaKeyword, metaDescription, imageUrl, thumbImageUrl, author, createdDate, isActive, schema, tag } = req.body

    try {
        const blog = new Blog({
            title,
            shortDescription,
            longDescription,
            metaTitle,
            metaKeyword,
            metaDescription,
            imageUrl,
            thumbImageUrl,
            author,
            createdDate,
            isActive,
            schema,
            tag,
            userId: req.userId
        })
        await blog.save();
        res.json({ status: 200, message: "New Blog created", blog });
    } catch (error) {
        console.error("Error creating blog:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const getAllBlogs = async (req, res) => {
    try {
        blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}
const getUserBlogs = async (req, res) => {
    try {
        let blogs;
        if (req.isAdmin) {
            blogs = await Blog.find();
        } else {
            blogs = await Blog.find({ userId: req.userId });
        }
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}
const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
}

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        const previousImage = path.basename(blog.imageUrl);
        const previousThumbImage = path.basename(blog.thumbImageUrl);
        const previousImagePath = path.join(__dirname, '../assets/uploads/images/blogs', previousImage);
        const previousThumbImagePath = path.join(__dirname, '../assets/uploads/images/blogs', previousThumbImage);
        fs.unlink(previousImagePath, (err) => {
            if (err) {
                console.error("Error deleting image:", err);
            } else {
                console.log("Previous image deleted:", previousImage);
            }
        });
        fs.unlink(previousThumbImagePath, (err) => {
            if (err) {
                console.error("Error deleting thumb image:", err);
            } else {
                console.log("Previous thumb image deleted:", previousThumbImage);
            }
        });
        await Blog.findByIdAndDelete(id);
        res.status(200).json({ status: 200, message: "Blog deleted successfully" });
    } catch (error) {
        console.error("Error deleting blog:", error);
        res.status(500).json({ status: 200, message: "Internal Server Error", error });
    }
}

const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const blog = await Blog.findById(id);
        if (!blog) return res.status(404).json({ message: "Blog not found" })

        Object.keys(updates).forEach(key => {
            blog[key] = updates[key];
        })

        const newImageUrl = req.body?.imageUrl;
        const newThumbImageUrl = req.body?.thumbImageUrl;
        const oldImageUrl = blog.imageUrl;
        const oldThumbImageUrl = blog.thumbImageUrl;

        const deleteFile = async (filePath) => {
            try {
                await fs.unlinkSync(filePath);
                console.log("Deleted:", filePath);
            } catch (err) {
                console.error("Error deleting file:", err);
            }
        };

        if (oldImageUrl && oldImageUrl !== newImageUrl && newImageUrl !== undefined) {
            const oldFilename = path.basename(oldImageUrl);
            const oldImagePath = path.join(__dirname, "../assets/uploads/images/blogs", oldFilename);
            deleteFile(oldImagePath);
        }

        if (oldThumbImageUrl && oldThumbImageUrl !== newThumbImageUrl && newThumbImageUrl !== undefined) {
            const oldThumbFilename = path.basename(oldThumbImageUrl);
            const oldThumbImagePath = path.join(__dirname, "../assets/uploads/images/blogs", oldThumbFilename);
            deleteFile(oldThumbImagePath);
        }

        await blog.save();
        return res.status(200).json({ status: 200, message: "Blog updated successfully", blog });
    } catch (error) {
        console.error("Error updating blog:", error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

module.exports = { createNewBlog, getAllBlogs, getUserBlogs, getBlogById, deleteBlog, updateBlog }