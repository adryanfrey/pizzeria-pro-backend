import prismaClient from "../../prisma";

interface ProductRequest {
    category_id: string
}

export class FilterProductService{
    async execute({category_id}: ProductRequest){

        if (category_id === undefined) {
            throw new Error('you need to pass the category ID')
        }

        const filteredProducts = await prismaClient.product.findMany({
            where: {
                category_id: category_id
            },
            select: {
                name: true,
                price: true,
                id: true,
            }
        })
        
        return filteredProducts
    }
}