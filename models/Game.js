import mongoose from "mongoose";

const MODEL_NAME = "Game";
const COLLECTION_NAME = "game";

const GameSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dicesYams: {
    type: Array,
  },
  yamsResult: {
    type: Number,
  },
  pastriesWin: {
    type: Array,
  },
}, { timestamps: true });

export const Game = mongoose.model(
  MODEL_NAME,
  GameSchema,
  COLLECTION_NAME
);
