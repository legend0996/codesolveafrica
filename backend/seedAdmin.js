import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./models/User.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const existing = await User.findOne({
      email: "admin@codesolveafrica.com",
    });

    if (existing) {
      console.log("Admin already exists");
      process.exit();
    }

    await User.create({
      email: "admin@codesolveafrica.com",
      password: "admin123",
      role: "super_admin",
    });

    console.log("Super admin created successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

createAdmin();
