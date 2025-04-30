const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: Number, required: true },
        password: { type: String, required: true },
        isActive: { type: Boolean, required: true, default: true },
        isAdminUser: { type: Boolean, required: true, default: false },
    },
    { versionKey: false, timestamps: true }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model("user", userSchema);
module.exports = User;