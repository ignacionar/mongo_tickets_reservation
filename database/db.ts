import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

let DB_URL:string = process.env.DB_URL ?? ''

export const connectDB = async () => {
  await mongoose.connect(DB_URL)
}