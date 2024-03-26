import { Router } from "express";
import { borrarReceta, crearReceta, editarReceta, listarReceta, obtenerReceta } from "../controllers/receta.controllers.js";

const router = Router();

router.route('/tareas').get(listarReceta).post(crearReceta)
router.route('/tareas/:id').get(obtenerReceta).put(editarReceta).delete(borrarReceta)

export default router;