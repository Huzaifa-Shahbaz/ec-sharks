const express = require('express');
const router = express.Router();
const { createNewUser, loginUser, logOutUser } = require('../controllers/userController')

router.post('/signup', createNewUser)
router.post('/login', loginUser)
router.post('/logout', logOutUser)

module.exports = router