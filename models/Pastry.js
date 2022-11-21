import mongoose from "mongoose";

const MODEL_NAME = "Pastries";
const COLLECTION_NAME = "pastries";

const PastriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  sophisticated: {
    type: Number,
    required: true,
  },
});

export const Pastries = mongoose.model(
  MODEL_NAME,
  PastriesSchema,
  COLLECTION_NAME
);
