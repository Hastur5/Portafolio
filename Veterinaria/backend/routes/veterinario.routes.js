import express from "express";
const router = express.Router();
import { registrar, perfil } from "../controllers/veterinario.controller.js";

router.get("/", registrar);

router.get("/perfil", perfil);

export default router;
