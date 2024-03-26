import mongoose, {Schema} from "mongoose";

const recetaSchema = new Schema({
    titulo:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 30
    },
    subtitulo:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 30
    },
    detalle:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 300
    },
    tipo:{
        type:String,
        required:true,
        enum:["Comun", "Especial", "Tradicional", "Navidad"]
    },
    img_url:{
        type:String,
        required:true,
    }
})

const Receta = mongoose.model('receta',recetaSchema)

export default Receta;