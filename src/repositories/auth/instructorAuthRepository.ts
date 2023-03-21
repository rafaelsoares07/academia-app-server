import prisma from "../../database/db";

export async function findInstructorByEmail(email: string) {

    const instructor = await prisma.instructor.findFirst({
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

    return instructor
}

export async function createInstructor(user: any) {

    return await prisma.instructor.create({ data: user })
}