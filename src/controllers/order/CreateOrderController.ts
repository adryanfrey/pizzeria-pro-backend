import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

export class CreateOrderController {
    async handle(req: Request, res: Response){
        
        const { table, name, user_id } = req.body

        const createOrderService = new CreateOrderService()

        const order = await createOrderService.execute({table, name, user_id})

        return res.json(order)
    }
}