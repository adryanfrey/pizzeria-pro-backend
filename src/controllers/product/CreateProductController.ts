import { Request, Response } from "express";
import { CreateProdcutService } from "../../services/product/CreateProductService";

export class CreateProductController{
    async handle(req: Request, res: Response) {

        const {name, price, description, categoryId} = req.body

        const createProductService = new CreateProdcutService()

        const product = await createProductService.execute({name, price, description, categoryId})

        return res.json(product)
    }
}