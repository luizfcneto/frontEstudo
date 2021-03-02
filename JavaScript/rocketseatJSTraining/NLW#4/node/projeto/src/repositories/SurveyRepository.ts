import { EntityRepository, Repository } from "typeorm";
import { Surveys } from "../models/Surveys";

@EntityRepository( Surveys )
class SurveyRepository extends Repository<Surveys> {}

export { SurveyRepository };