import { Request, Response } from "express";
import { AddNewItemService } from "../../services/item/AddNewItemService";


export class AddNewItemController{
    async handle(req: Request, res: Response){

        const { order_id, product_id, amount } = req.body

        const addNewItemService = new AddNewItemService()

        const item = await addNewItemService.execute({order_id, product_id, amount})

        return res.json(item)
    }
}