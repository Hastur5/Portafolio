import express from "express";
const router = express.Router();
import {
  registrar,
  perfil,
  confirmar,
  autenticar,
} from "../controllers/veterinario.controller.js";

router.post("/", registrar);
router.get("/perfil", perfil);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);

// en una url si se agregan ":" es porque la siguiente parte será dinámica.

export default router;
