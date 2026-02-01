import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    clientPhone: {
      type: String,
      required: true,
    },
    clientEmail: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Message", messageSchema);
