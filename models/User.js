import mongoose from "mongoose";

const MODEL_NAME = "Users";
const COLLECTION_NAME = "users";

const UsersSchema = new mongoose.Schema({
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
  },
  password: {
    type: String,
    required: true,
  },
});

export const Users = mongoose.model(
  MODEL_NAME,
  UsersSchema,
  COLLECTION_NAME
);
