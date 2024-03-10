import mongoose from "mongoose";

const discountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  discountPercent: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Discount", discountSchema);
