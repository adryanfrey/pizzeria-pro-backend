import { Request, Response } from "express";
import { FilterProductService } from "../../services/product/FilterProductService";

export class FilterProductController{
    async handle(req: Request, res: Response){

        const category_id = req.query.category_id as string

        const filteredProducts = new FilterProductService()

        const products = await filteredProducts.execute({category_id})

        return res.json(products)
    }
}