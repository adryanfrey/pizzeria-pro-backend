import prismaClient from "../../prisma";

interface CategoryRequest {
    name: string
    user_id: string
}

export class CreateCategoryService {
    async execute({name, user_id}: CategoryRequest) {

        if (name === '' || !name) {
            throw new Error('Invalid Category')
        }

        const findCategory = await prismaClient.category.findFirst({
            where: {
                name: name
            }
        })

        if (findCategory) {
            throw new Error('Category Already Exists')
        }

        const category = await prismaClient.category.create({
            data: {
                name,
                user_id
            },
            select: {
                id: true,
                name: true,
                created_at: true
            }
        })


        return category
    }
}