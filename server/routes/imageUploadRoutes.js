const express = require("express");
const router = express.Router();
const upload = require('../middlewares/upload');
const { uploadImage } = require("../controllers/imageUploadController");


router.post("/", upload.fields([{ name: 'imageUrl' }, { name: 'thumbImageUrl' }]), uploadImage);

module.exports = router;