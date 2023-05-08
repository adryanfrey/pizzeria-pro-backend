import prismaClient from "../../prisma"
import { hash } from "bcryptjs"


interface UserRequest {
    name: string
    email: string
    password: string
}

export class CreateUserService {
    async execute({ name, email, password }: UserRequest) {

        if (!email) {
            throw new Error('Invalid email')
        }

        if (!name) {
            throw new Error('Invalid name')
        }

        if (!password) {
            throw new Error('Invalid password')
        }

        const emailAlreadyExist = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (emailAlreadyExist) {
            throw new Error('Email already registered')
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                password: passwordHash
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return user
    }
}