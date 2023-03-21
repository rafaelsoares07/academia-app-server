import prisma from "../../database/db";

export async function findClientByEmail(email: string) {

    const client = await prisma.client.findFirst({
        select: {
            id: true,
            name: true,
            email: true,
            password: true,
            AccessLevel: {
                select: {
                    name: true
                }
            }
        },
        where: {
            email: email
        }
    })

    return client
}

export async function createClient(user: any) {

    return await prisma.client.create({ data: user })
}