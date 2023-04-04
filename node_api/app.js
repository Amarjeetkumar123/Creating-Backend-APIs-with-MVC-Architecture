import express from "express";
import { config } from "dotenv";
import router from "./routes/userRoutes.js";

export const app = express();

config({
  path: "./data/config.env",
});

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/users", router);
