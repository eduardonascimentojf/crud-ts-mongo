import express, { Router } from 'express'
import config from './config/config';
import mongoose  from 'mongoose'
import {userRoute} from'./routes/usersRoute'
const app = express()
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: false }))
userRoute(app)

mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then(() => {
        console.log('Conectado ao banco de dados com sucesso')
    })
    .catch((error) => {
     console.log(`Erro ao conectar ao banco de dados: ${error}`)
    });

app.listen(config.server.port, ()=>{
     console.log(`sevidor ropdando na porta ${config.server.port}`)
})