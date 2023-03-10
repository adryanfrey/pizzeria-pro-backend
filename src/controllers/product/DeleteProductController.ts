import { Response, Request } from "express";
import { DeleteProductService } from "../../services/product/DeleteProductService";


export class DeleteProductController{
    async handle(req: Request, res: Response){

        const {product_id} = req.body

        console.log(product_id)

        const deleteProduct = new DeleteProductService()

        const product = await deleteProduct.execute({product_id})

        return res.json(product)
    }
}