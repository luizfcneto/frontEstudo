import { Router } from "express";
import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController();
router.post( "/users", userController.create );

const surveysController = new SurveysController();
router.post( "/survey", surveysController.create ); 
router.get( "/survey", surveysController.getList );

export { router }