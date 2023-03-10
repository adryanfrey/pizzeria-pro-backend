import { Request, Response } from "express";

export class WelcomeController {
    async handle(req: Request, res: Response) {


        return res.json('Welcome')
    }
}