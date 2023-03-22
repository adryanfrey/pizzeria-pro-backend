import { Request, Response } from "express";
import DeleteCategoryService from "../../services/category/DeleteCategoryService";

export default class DeleteCategoryController{
    async handle(req: Request, res: Response){

        const category_id = req.query.category_id as string

        const deleteCategory = new DeleteCategoryService()

        const category = await deleteCategory.execute({category_id})

        return res.json(category)
        
    }
}