import {Request, Response} from "express";

export class ProductController {
    search = (req: Request, res: Response) => {
        console.log(this)
        res.json(req.body).status(200)
    }
}