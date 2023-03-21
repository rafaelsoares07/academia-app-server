import prisma from "../../database/db";


export async function findAcademyByEmail(email: string) {

    const academy = await prisma.academy.findFirst({
        select: {
            id: true,
            name: true,
            email: true,
            cidade: true,
            rua: true,
            numero: true,
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

    return academy
}

export async function createAcademy(user: any) {

    return await prisma.academy.create({ data: user })
}