import mongoose from "mongoose";

export const connectDB =async () => {
    await mongoose.connect('mongodb+srv://dhanit:18211012@cluster0.vae1lm3.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}