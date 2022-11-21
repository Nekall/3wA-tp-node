import express from "express";
const router = express.Router();

// Middleware
import { authGuard } from "../middleware/auth.guard.js";

// Controllers
import {
  home,
  game,
  login,
  signup,
  logout,
  profile,
  pastries,
  gameData,
} from "../controllers/generic.controller.js";

router.get("/", home);

router.get("/game", authGuard, game);
router.post("/game", authGuard, game);

router.get("/login", login);
router.post("/login", login);

router.get("/logout", logout);

router.get("/signup", signup);
router.post("/signup", signup);

router.get("/profile", authGuard, profile);

router.get("/pastries", pastries);

router.get("/gameData", gameData);

export default router;
