import mongoose from "mongoose";

const MODEL_NAME = "Game";
const COLLECTION_NAME = "game";

const GameSchema = new mongoose.Schema({
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
});

export const Game = mongoose.model(
  MODEL_NAME,
  GameSchema,
  COLLECTION_NAME
);
