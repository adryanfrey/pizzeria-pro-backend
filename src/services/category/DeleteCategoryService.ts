import prismaClient from "../../prisma";

interface DeleteCategoryProps{
    category_id: string
}

export default class DeleteCategoryService{
    async execute({category_id}: DeleteCategoryProps){

        const category = await prismaClient.category.delete({
            where: {
                id: category_id
            }
        })
    }
}