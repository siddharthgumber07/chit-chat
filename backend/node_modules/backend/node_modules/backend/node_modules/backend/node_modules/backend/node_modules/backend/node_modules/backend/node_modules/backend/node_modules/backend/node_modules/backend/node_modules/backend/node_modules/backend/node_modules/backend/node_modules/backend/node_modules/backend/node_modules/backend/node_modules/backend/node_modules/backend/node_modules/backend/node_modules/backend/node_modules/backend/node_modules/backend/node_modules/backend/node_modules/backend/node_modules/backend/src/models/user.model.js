import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 32
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    profilePic : {
        type: String,
        default: "/avatar.png"
    },
}, { timestamps: true });
const User=mongoose.model("User", userSchema);
export default User;