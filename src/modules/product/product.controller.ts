import {Request, Response} from "express";

export class ProductController {
    search(req: Request, res: Response) {
        res.json({
            message: 'success'
        }).status(200)
    }
}