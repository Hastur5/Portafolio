import express from "express";
const router = express.Router();
import {
  registrar,
  perfil,
  confirmar,
  autenticar,
} from "../controllers/veterinario.controller.js";
import checkAuth from "../middlewares/authMiddleware.js";

router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);

router.get("/perfil",checkAuth, perfil);
// en una url si se agregan ":" es porque la siguiente parte será dinámica.

export default router;
