const express = require('express');
const router = express.Router();
const verifyUserToken = require('../middlewares/verifyUserToken');
const { createNewBlog, getAllBlogs, getBlogById, deleteBlog, updateBlog, getUserBlogs } = require('../controllers/blogController')


router.post('/', verifyUserToken, createNewBlog)
router.get('/', getAllBlogs) // Public route - fetch all blogs
router.get('/userBlogs', verifyUserToken, getUserBlogs); // Protected route - fetch blogs for a specific user
router.get('/', verifyUserToken, getAllBlogs)
router.get('/:id', getBlogById)
router.patch('/:id', updateBlog)
router.delete('/:id', deleteBlog)

module.exports = router