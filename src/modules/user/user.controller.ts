import {Request, Response} from "express";

export class UserController {
    login(req: Request, res: Response) {
        res.json({
            message: 'success'
        }).status(200)
    }
}