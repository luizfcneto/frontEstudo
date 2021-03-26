import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { router } from "./routes";
import createConnection from "./database";
import { AppError } from "./errors/AppError";

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

app.use(express.json());
app.use(router);
app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    } else {
      return response.status(500).json({
        status: "Error",
        message: `Internal Server Error ${err}`,
      });
    }
  }
);

export { app, port };
