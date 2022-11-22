import { Pastries } from "../models/Pastry.js";
import { Game } from "../models/Game.js";

export const pastries = async (req, res) => {
    const pastries = await Pastries.find();
    res.json(pastries);
};

export const gameData = async (req, res) => {
const gameData = await Game.find();
res.json(gameData);
}