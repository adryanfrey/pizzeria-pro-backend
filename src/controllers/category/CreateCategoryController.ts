import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

export class CreateCategoryController{
    async handle(req: Request, res: Response) {

        const { name, user_id } = req.body

        console.log(req.body)

        const createCategoryService = new CreateCategoryService()
        
        const category = await createCategoryService.execute({name, user_id})

        return res.json(category)
    }
}