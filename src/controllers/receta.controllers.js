import Receta from "../database/models/receta.js"
import { validationResult } from "express-validator";

export const crearReceta = async(req,res)=>{
    try {

        const errores = validationResult(req)

        if(!errores.isEmpty()){
             return res.status(400).json({
                errores: errores.array()
            })    
        }

        const nuevaReceta = new Receta(req.body);

        await nuevaReceta.save()

        res.status(201).json("Se guardo una nueva Receta!")
    } catch (error) {
        console.error(error)
        res.status(400).json({
            mensaje: "error: no se pudo crear la Receta"
        })
    }
}

export const listarRecetas = async(req,res)=>{
    try {
        const listaRecetas= await Receta.find()

        res.status(200).json(listaRecetas)
    } catch (error) {
        console.error(error)
        res.status(400).json({
            mensaje: "error: no se pudo obtener la lista de recetas"
        })
    }
}

export const obtenerReceta = async(req, res)=>{
    try{
        console.log(req.params.id);

        const recetaBuscada = await Receta.findById(req.params.id);

        res.status(200).json(recetaBuscada);
    }catch(error){
        console.error(error)
        res.status(404).json({mensaje: "No se encontro la receta buscada"})
    }
}

export const editarReceta = async (req, res) => {
    try {

      const recetaBuscada =  await Receta.findById(req.params.id);

      if(!recetaBuscada){
          return res.status(404).json({mensaje: "La receta no fue encontrado."});
      }
      await Receta.findByIdAndUpdate(req.params.id, req.body);

      res.status(200).json({mensaje: "La receta fue editada correctamente"})
    } catch (error) {
      console.error(error);
      res.status(500).json({mensaje: "Ocurrio un error al editar la receta"})
    }
}

export const borrarReceta = async (req, res) => {
    try {
      const recetaBuscada =  await Receta.findById(req.params.id);
      if(!recetaBuscada){
          return res.status(404).json({mensaje: "La receta no fue encontrado."});
      }
      await Receta.findByIdAndDelete(req.params.id);

      res.status(200).json({mensaje: "la receta fue borrado correctamente"})
    } catch (error) {
      console.error(error);
      res.status(500).json({mensaje: "Ocurrio un error al borrar la receta"})
    }
  }