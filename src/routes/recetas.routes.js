import { Router } from "express";
import { borrarReceta, crearReceta, editarReceta, listarReceta, obtenerReceta } from "../controllers/receta.controllers.js";
import { check } from "express-validator";

const router = Router();

router.route('/receta').get(listarReceta).post(
    [
        check("titulo")
        .notEmpty()
        .withMessage("el titulo es obligatorio")
        .isLength({min:2,max:30})
        .withMessage("el titulo debe tener entre 2 y 30 caracteres"),

        check("subtitulo")
        .notEmpty()
        .withMessage("el subtitulo es obligatorio")
        .isLength({min:2,max:30})
        .withMessage("el subtitulo debe tener entre 2 y 30 caracteres"),

        check("detalle")
        .notEmpty()
        .withMessage("el detalle es obligatorio")
        .isLength({min:2,max:300})
        .withMessage("el detalle debe tener entre 2 y 300 caracteres"),

        check("tipo")
        .notEmpty()
        .withMessage("la importancia es obligatorio")
    ]
    ,crearReceta)
router.route('/receta/:id').get(obtenerReceta).put(editarReceta).delete(borrarReceta)

export default router;