import prismaClient from "../../prisma";


export class ListCategoryService{
    async execute(user_id: string) {

        if(user_id === undefined) {
            throw new Error('You should provide the user ID')
        }

        const categories = await prismaClient.category.findMany({
            where: {
                user_id: user_id
            },
            select: {
                id: true,
                name: true
            }
        })

        return categories
    }
}