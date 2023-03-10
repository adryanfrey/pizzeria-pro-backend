import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken'

interface AuthRequest {
    email: string
    password: string    
}

export class AuthUserService {
    async execute({email, password}: AuthRequest) {

        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(user === undefined) {
            throw new Error('User is undefined')
        }

        if (!user) {
            throw new Error('User not found')
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error('Incorret password')
        }

        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}