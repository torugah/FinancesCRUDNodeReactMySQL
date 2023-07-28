import express from "express";
import { getRegistos } from "../controllers/registro.js";

const router = express.Router();

router.get("/", getRegistos);

export default router;