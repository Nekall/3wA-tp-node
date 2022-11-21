import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import session from 'express-session';
import MongoStore from 'connect-mongo';
import { seed } from "./seed.js";

// Routers
import genericRouter from "./routes/generic.router.js";

// Init DB
mongoose
  .connect("mongodb://localhost:27017/tp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(init);

async function init() {
  //seed(); // 🌱
  console.log("📡 Connected to mongoDB");
  app.listen(APP_PORT, () => {
    console.log(`🔌 App listening at http://${APP_HOSTNAME}:${APP_PORT}`);
  });
}

// Init App
dotenv.config();
const { APP_HOSTNAME, APP_PORT, NODE_ENV } = process.env;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.locals.pretty = (NODE_ENV !== 'production');
app.use(
  session({
    name : 'user',
    secret : 'thisIsASecret',
    resave :true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl:"mongodb://localhost:27017/tp" }),
    cookie : { maxAge : 180 * 60 * 1000 }
  })
);

// Middlewares
app.use(express.static(path.join(__dirname, "public")));

// Routers
app.use("/", genericRouter);