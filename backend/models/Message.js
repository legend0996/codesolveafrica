const mongoose = require("mongoose");

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

module.exports = mongoose.model("Message", messageSchema);
