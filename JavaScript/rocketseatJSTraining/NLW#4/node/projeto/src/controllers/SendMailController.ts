import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { resolve } from "path";
import { SurveyRepository } from "../repositories/SurveyRepository";
import { UserRepository } from "../repositories/UserRepository";
import { SurveysUserRepository } from "../repositories/SurveysUserRepository";
import SendMailService from "../services/SendMailService";

class SendMailController {

    async execute( request: Request, response: Response ){
        const { email, survey_id } = request.body;

        const usersRepository = getCustomRepository( UserRepository );
        const surveysRepository = getCustomRepository( SurveyRepository )
        const surveysUserRepository = getCustomRepository( SurveysUserRepository );        

        const user = await usersRepository.findOne( {
            email
        } );

        if( !user ){
            return response.status( 400 ).json( {
                error: "User does not exists"
            } );
        }

        const survey = await surveysRepository.findOne( {
            id: survey_id
        } );
        
        if( !survey ){
            return response.status( 400 ).json({
                error: "Survey does not exists"
            } );
        }

        const variables = {
            name: user.name,
            title: survey.title,
            description: survey.description, 
            user_id: user.id,
            link: process.env.URL_MAIL
        }        
        const npsPath = resolve( __dirname, "..", "views", "emails", "npsMail.hbs" );

        const surveyUserAlreadyExists = await surveysUserRepository.findOne({
            where: [ { user_id: user.id }, { value : null } ],
            relations: [ "user", "survey" ]
        })

        if( surveyUserAlreadyExists ){
            await SendMailService.execute( email, survey.title, variables, npsPath );

            return response.status( 201 ).json( surveyUserAlreadyExists );
        }

        const surveyUser = surveysUserRepository.create ( {
            survey_id,
            user_id: user.id
        } );

        await surveysUserRepository.save( surveyUser );
        
        

        await SendMailService.execute( email, survey.title, variables, npsPath );

        return response.status( 201 ).json( surveyUser );

    }

}

export { SendMailController };