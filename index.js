import express from 'express'
import cors from 'cors'
import morgan from 'morgan';
import 'dotenv/config';

const app = express()

app.set('port',(process.env.PORT || 4000))
app.listen(app.get('port'),()=>{
    console.info("en el puerto "+app.get('port'))
})

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))