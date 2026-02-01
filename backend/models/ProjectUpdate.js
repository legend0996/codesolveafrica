import mongoose from "mongoose";

const projectUpdateSchema = new mongoose.Schema(
  {
    projectId: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    updatedBy: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.model("ProjectUpdate", projectUpdateSchema);
