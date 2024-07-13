import {Request, Response} from "express";
import {appDataSource} from "../../configs/database";
import {User} from "./entities/user.entity";

export class UserController {
    userRepository = appDataSource.getRepository(User);

    login = async (req: Request, res: Response) => {
        await this.userRepository.save({
            firstName: 'amin',
            lastName: 'ben',
            age: 12,
        })
        const users = await this.userRepository.find();
        console.log(users)
        res.json({
            message: 'success',
            data: users,
        }).status(200)
    }
}