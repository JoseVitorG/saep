import express from "express";
import { listarAlgo } from "../controller/controller.js";

const router = express.Router()

router.get('/', listarAlgo)

export default router