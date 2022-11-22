import express from "express";
const router = express.Router();

// Controllers
import {
  pastries,
  gameData,
} from "../controllers/debug.controller.js";

router.get("/pastriesData", pastries);
router.get("/gameData", gameData);

export default router;
