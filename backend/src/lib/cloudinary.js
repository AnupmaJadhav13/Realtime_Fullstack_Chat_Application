import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Log to verify environment variables are loaded (remove in production)
console.log("Cloudinary Config Check:", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME ? "✓ Found" : "✗ Missing",
  api_key: process.env.CLOUDINARY_API_KEY ? "✓ Found" : "✗ Missing",
  api_secret: process.env.CLOUDINARY_API_SECRET ? "✓ Found" : "✗ Missing",
});

// Check if all required environment variables are present
if (!process.env.CLOUDINARY_CLOUD_NAME || 
    !process.env.CLOUDINARY_API_KEY || 
    !process.env.CLOUDINARY_API_SECRET) {
  console.error("Missing Cloudinary environment variables!");
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;