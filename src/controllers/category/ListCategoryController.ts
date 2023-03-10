import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

export class ListCategoryController {
    async handle(req: Request, res: Response) {
        
        const user_id = req.query.user_id as string

        const listCategoryService = new ListCategoryService()
        
        const categories = await listCategoryService.execute(user_id)

        return res.json(categories)
    }
}