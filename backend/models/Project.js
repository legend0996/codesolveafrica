import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, default: "" },
    link: { type: String, default: "" },
    category: { type: String, default: "" },
    year: { type: Number, default: new Date().getFullYear() },
    status: {
      type: String,
      enum: ["completed", "for-sale", "in-progress"],
      default: "completed",
    },
    price: { type: Number, default: 0 },
    features: { type: [String], default: [] },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
