import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../repository/UserRepository';

class UserController {

    async create(request: Request, response: Response){
        const { name, email } = request.body
        const userRepository = getCustomRepository(UsersRepository);

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

        return response.status(201).json(user);
    }

}

export default UserController;