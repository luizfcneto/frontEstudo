import "reflect-metadata";
import "./database/index";


import express from "express";
import { router } from "./routes";

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

console.log( "app = express() :" + app );
console.log( "router: " + router );

// Cria servidor: parametros, porta e função ser executada
app.listen( port, () => console.log( `Server is running on port: ${ port }` ) );

