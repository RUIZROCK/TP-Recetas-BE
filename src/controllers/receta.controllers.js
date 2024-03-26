import Tarea from "../database/models/receta.js"

export const crearReceta = async(req,res)=>{
    try {
        const nuevaReceta = new Tarea(req.body);

        await nuevaReceta.save()

        res.status(201).json("Se guardo una nueva Receta!")
    } catch (error) {
        console.error(error)
        res.status(400).json({
            mensaje: "error: no se pudo crear la Receta"
        })
    }
}