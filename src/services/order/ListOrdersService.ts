import prismaClient from "../../prisma";

export class ListOrdersServices{
    async execute(user_id: string){

        if(user_id === undefined) {
            throw new Error('You should provide the user Id')
        }

        const orders = await prismaClient.order.findMany({
            where: {
                draft: false,
                status: false,
                user_id: user_id
            },
            orderBy: {
                created_at: 'desc'
            }
        })

        return orders
    }
}