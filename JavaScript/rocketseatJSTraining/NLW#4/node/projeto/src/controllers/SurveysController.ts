import { Request, Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { Surveys } from "../models/Surveys";
import { SurveyRepository } from "../repositories/SurveyRepository";

class SurveysController {

    async create ( request: Request, response: Response ) {
        
        const { title, description } = request.body;
        // console.log( request.body );

        const surveysRepository = getCustomRepository( SurveyRepository );
        
        const survey = surveysRepository.create( {
            title,
            description
        } );

        await surveysRepository.save( survey );
        return response.status( 201 ).json( survey );

    }
    
    async getList ( request: Request, response: Response ) {

        const surveyRepository = getCustomRepository( SurveyRepository );
        const allSurvey = await surveyRepository.find();
        return response.status( 201 ).json( allSurvey );
    }

}

export { SurveysController }