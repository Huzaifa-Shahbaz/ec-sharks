const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    longDescription: { type: String, required: true },
    metaTitle: { type: String, required: true },
    metaKeyword: { type: String, required: true },
    metaDescription: { type: String, required: true },
    imageUrl: { type: String, required: true },
    thumbImageUrl: { type: String, required: true },
    author: { type: String, required: true },
    createdDate: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    schema: { type: String, required: true },
    tag: { type: String, required: true },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

const Blog = mongoose.model('blog', blogsSchema);
module.exports = Blog;




// const mongoose = require('mongoose')

// const blogsSchema = new mongoose.Schema(
//     {
//         title: { type: String, required: true },
//         shortDescription: { type: String, required: true },
//         longDescription: { type: String, required: true },
//         metaTitle: { type: String, required: true },
//         metaKeyword: { type: String, required: true },
//         metaDescription: { type: String, required: true },
//         imageUrl: { type: String, required: true },
//         thumbImageUrl: { type: String, required: true },
//         author: { type: String, required: true },
//         createdDate: { type: String, required: true },
//         isActive: { type: Boolean, default: true },
//         schema: { type: String, required: true },
//         tag: { type: String, required: true }
//     },
//     { versionKey: false, timestamps: true, }
// )
// const Blog = mongoose.model('blog', blogsSchema)

// module.exports = Blog