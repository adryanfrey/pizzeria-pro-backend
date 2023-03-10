import { Request, Response } from "express";
import { ListOrdersServices } from "../../services/order/ListOrdersService";

export class ListOrdersController{
    async handle(req: Request, res: Response){

        const user_id = req.query.user_id as string

        const listOrders = new ListOrdersServices()

        const orders = await listOrders.execute(user_id)

        return res.json(orders)
    }
}