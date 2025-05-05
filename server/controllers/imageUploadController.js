
const uploadImage = (req, res) => {

    if (!req.files && (!req.files.imageUrl && !req.files.thumbImageUrl)) {
        return res.status(400).json({ message: "Images are required" });
    } else {
        if(req.files.imageUrl !== undefined && req.files.thumbImageUrl !== undefined) {
            const image_url = req.files.imageUrl ? `http://localhost:8001/api/images/${req.files.imageUrl[0].filename}` : '';
            const thumbImage_url = req.files.thumbImageUrl ? `http://localhost:8001/api/images/${req.files.thumbImageUrl[0].filename}` : '';
            return res.json({
                status: 200,
                image_url,
                thumbImage_url
            })
        } else if(req.files.imageUrl !== undefined && req.files.thumbImageUrl == undefined) {
            const image_url = req.files.imageUrl ? `http://localhost:8001/api/images/${req.files.imageUrl[0].filename}` : '';
            return res.json({
                status: 200,
                image_url,
            })
        } else if (req.files.imageUrl == undefined && req.files.thumbImageUrl !== undefined) {
            const thumbImage_url = req.files.thumbImageUrl ? `http://localhost:8001/api/images/${req.files.thumbImageUrl[0].filename}` : '';
            return res.json({
                status: 200,
                thumbImage_url
            })
        }
    }
};

module.exports = { uploadImage }