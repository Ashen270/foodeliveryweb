import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ashenshamilka270:karapinchaDBpassword@cluster0.pdikz2h.mongodb.net/Karapincha').then(()=>console.log("DB Connected"));
}