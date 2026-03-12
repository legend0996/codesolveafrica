const mongoose = require("mongoose");

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

module.exports = mongoose.model("ProjectUpdate", projectUpdateSchema);
