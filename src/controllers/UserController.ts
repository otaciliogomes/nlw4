import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

class UserController {

    async create(request: Request, response: Response){
        const { name, email } = request.body
        const userRepository = getRepository(User);

        const userAlredyExist = await userRepository.findOne({
            email
        })

        if(userAlredyExist) {
            return response.status(400).json({
                error: "User already exist"
            })
        }

        const user = userRepository.create({
            name,
            email
        });
        
        await userRepository.save(user);

        return response.send(user);
    }

}

export default UserController;