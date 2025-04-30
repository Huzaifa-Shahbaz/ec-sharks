const express = require('express');
const router = express.Router();
const { sendMail, handleContactForm, handleQueryForm } = require('../controllers/emailController')

router.post('/contact-form', handleContactForm)
router.post('/query-form', handleQueryForm)

module.exports = router