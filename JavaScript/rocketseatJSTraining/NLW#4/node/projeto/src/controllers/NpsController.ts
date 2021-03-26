import { Request, Response } from "express";
import { getRepository, IsNull, Not } from "typeorm";
import { SurveysUserRepository } from "../repositories/SurveysUserRepository";

class NpsController {
  /*
        Regras do calculo: Notas de
            Detratores: 0 - 6
            Passivos: 7 - 8
            Promotores: 9 - 10

        formula NPS = ( |Promotores| - |Detratores| ) / ( |total| ) * 100;
    */

  async execute(request: Request, response: Response) {
    const { survey_id } = request.params;
    const surveysUsersRepository = getRepository(SurveysUserRepository);
    const allSurveysAnswered = await surveysUsersRepository.find({
      survey_id,
      value: Not(IsNull()),
    });

    const detractors = allSurveysAnswered.filter((survey) => {
      return survey.value >= 0 && survey.value <= 6 && survey.value !== null;
    }).length;

    const promoters = allSurveysAnswered.filter((survey) => {
      return survey.value >= 9 && survey.value <= 10 && survey.value !== null;
    }).length;

    const passives = allSurveysAnswered.filter((survey) => {
      return survey.value > 6 && survey.value < 9 !== null;
    }).length;

    const totalAnswers = allSurveysAnswered.length;

    const nps = Number(
      ((promoters - detractors / totalAnswers) * 100).toFixed(2)
    );

    return response.json({
      detractors,
      promoters,
      passives,
      totalAnswers,
      nps,
    });
  }
}
export { NpsController };
