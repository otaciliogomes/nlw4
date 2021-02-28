import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import SurveysRepository from '../repository/SurveysRepository';

class SurveysController {

    async create(request: Request, response: Response ){
        const { title, description } = request.body;

        const surveysRepository = getCustomRepository(SurveysRepository);

        const survey = surveysRepository.create({
            title,
            description
        })

        await surveysRepository.save(survey);

        response.status(201).json(survey);
    }

    async show(request: Request, response: Response){
        const surveysRepository = getCustomRepository(SurveysRepository);

        const surveys = await surveysRepository.find()

        console.log(surveys)
        response.json(surveys).status(200)
    }

}

export default SurveysController;