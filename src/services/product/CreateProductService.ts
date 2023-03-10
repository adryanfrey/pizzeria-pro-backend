import prismaClient from "../../prisma";

interface ProductRequest {
    name: string
    price: string
    description: string
    categoryId: string
}

export class CreateProdcutService {
    async execute({name, price, description, categoryId}: ProductRequest){

        const product = await prismaClient.product.create({
            data: {
                name,
                price,
                description,
                category_id: categoryId,
                banner: ''
            },
            select: {
                name: true,
                price:  true,
                description: true,
                category_id: true
            }
        })

        console.log(product)

        return product
    }
}

