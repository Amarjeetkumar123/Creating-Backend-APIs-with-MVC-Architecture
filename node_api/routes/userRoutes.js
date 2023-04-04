import express from "express";
import { getAllUsers, getUserDetails, register } from "../controllers/userFunctions.js";

const router = express.Router();


router.get("/", async (req, res) => {
  await res.send("<h1>Home Page </h1>");
});

router.get("/all", getAllUsers);

router.post("/new", register);

router.get("userid/:id", getUserDetails);


export default router