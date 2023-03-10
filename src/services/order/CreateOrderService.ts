import prismaClient from "../../prisma";

interface OrderRequest{
    table: number
    name: string
    user_id: string
}

export class CreateOrderService{
    async execute({table, name, user_id}: OrderRequest){

        const order = await prismaClient.order.create({
            data: {
                table,
                name,
                user_id
            }
        })

        return order
    }
}