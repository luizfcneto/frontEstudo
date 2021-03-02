import "reflect-metadata";
import express from "express";
import { router } from "./routes";
import createConnection from "./database";

createConnection();

const app = express();
const port = 3333;
/*
    Métodos HTTP mais utilizados em uma API
    GET => Busca 
    POST => Salva
    PUT => Altera
    DELETE => Deleta
    PATCH => Alteração específica
*/

app.use( express.json() )
app.use( router )

export { app, port };